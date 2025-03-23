import { useEffect, useState } from 'react';
import { getConferenceInfo } from '../../../../api/reserve/getConferenceInfo.ts';
import * as S from './AdminEntryCard.style.ts';
import { Tag } from '../../../common/tag/Tag.tsx';
import Icon from '../../../common/icon/Icon.tsx';

interface ConferenceInfo {
  id: number;
  name: string;
  startTime: string;
  attend: number;
  sessions: {
    id: number;
    name: string;
    startTime: string;
  }[];
}

export default function AdminEntryCard() {
  const [conferInfo, setConferInfo] = useState<ConferenceInfo | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const fetchConference = async () => {
      const response = await getConferenceInfo(1);
      if (response) {
        setConferInfo(response);
      }
    };
    fetchConference();

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const sortedSessions = conferInfo?.sessions.sort((a, b) => a.id - b.id);

  return (
    <>
      {conferInfo ? (
        <S.CardContainer>
          <S.Card>
            <S.CardHeader>
              <S.TotalCount>총 500명</S.TotalCount>
              <S.CornerBox>
                <Icon
                  name="strokeright"
                  color="#909298"
                  size={isMobile ? 20 : 24}
                />
              </S.CornerBox>
            </S.CardHeader>
            <S.EntryCount>
              {conferInfo.attend ? conferInfo.attend : 0}명 입장
            </S.EntryCount>
            <Tag isEntryStatus={true}>{conferInfo.name}</Tag>
          </S.Card>

          {sortedSessions?.map((session) => (
            <S.Card key={session.id}>
              <S.CardHeader>
                <S.TotalCount>총 0명</S.TotalCount>
                <S.CornerBox>
                  <Icon
                    name="strokeright"
                    color="#909298"
                    size={isMobile ? 20 : 24}
                  />
                </S.CornerBox>
              </S.CardHeader>
              <S.EntryCount>0명 입장</S.EntryCount>
              <Tag isEntryStatus={true}>{session.name}</Tag>
            </S.Card>
          ))}
        </S.CardContainer>
      ) : (
        <div>없음</div>
      )}
    </>
  );
}
