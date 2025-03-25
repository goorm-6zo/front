import { useEffect, useState } from 'react';
import * as S from './AdminEntryCard.style.ts';
import { Tag } from '../../../common/tag/Tag.tsx';
import Icon from '../../../common/icon/Icon.tsx';
import { ConferenceInfo } from '../../../../hooks/useConferenceData.ts';
import useSSE from '../../../../hooks/useSSE.ts';
import { useNavigate } from 'react-router-dom';

interface AdminEntryCardProps {
  conferInfo: ConferenceInfo | null;
}

export default function AdminEntryCard({ conferInfo }: AdminEntryCardProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const entryCounts = useSSE(
    conferInfo?.id ?? 0,
    conferInfo?.sessions.map((session) => session.id) ?? [],
  );
  const navigate = useNavigate();

  const handleNavigate = (conferenceId: number, sessionId?: number) => {
    navigate('/admin/visitor-status', {
      state: {
        conferenceId,
        sessionId,
      },
    });
  };

  useEffect(() => {
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
              <S.TotalCount>총 {conferInfo.capacity}명</S.TotalCount>
              <S.CornerBox onClick={() => handleNavigate(conferInfo.id)}>
                <Icon
                  name="strokeright"
                  color="#909298"
                  size={isMobile ? 20 : 24}
                />
              </S.CornerBox>
            </S.CardHeader>
            <S.EntryCount>{entryCounts.conferenceAttend}명 입장</S.EntryCount>
            <Tag isEntryStatus={true}>{conferInfo.name}</Tag>
          </S.Card>

          {sortedSessions?.map((session) => (
            <S.Card key={session.id}>
              <S.CardHeader>
                <S.TotalCount>총 {session.capacity}명</S.TotalCount>
                <S.CornerBox
                  onClick={() => handleNavigate(conferInfo.id, session.id)}
                >
                  <Icon
                    name="strokeright"
                    color="#909298"
                    size={isMobile ? 20 : 24}
                  />
                </S.CornerBox>
              </S.CardHeader>
              <S.EntryCount>
                {entryCounts.sessions[session.id] ?? 0}명 입장
              </S.EntryCount>
              <Tag isEntryStatus={true}>{session.name}</Tag>
            </S.Card>
          ))}
        </S.CardContainer>
      ) : (
        <div>컨퍼런스가 없음!</div>
      )}
    </>
  );
}
