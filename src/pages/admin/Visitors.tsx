import { useEffect, useState } from 'react';
import AdminEntryCard from '../../components/common/card/admin/adminEntryCard/AdminEntryCard';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Visitors.style.ts';
import { getConferenceInfo } from '../../api/reserve/getConferenceInfo.ts';

export interface ConferenceInfo {
  id: number;
  name: string;
  capacity: number;
  startTime: string;
  attend: number;
  sessions: {
    id: number;
    name: string;
    capacity: string;
    startTime: string;
  }[];
}

const Visitors = () => {
  const [conferInfo, setConferInfo] = useState<ConferenceInfo | null>(null);

  useEffect(() => {
    const fetchConference = async () => {
      const response = await getConferenceInfo(1);
      if (response) {
        setConferInfo(response.data);
      }
    };
    fetchConference();
  }, []);

  return (
    <ResponsiveLayout>
      <S.TitleContainer>
        <S.Title>입장 현황</S.Title>
        <S.Description>
          해당 화면에 얼굴 인식으로 입장한 방문자 수가 표시돼요
        </S.Description>
      </S.TitleContainer>
      <AdminEntryCard conferInfo={conferInfo} />
    </ResponsiveLayout>
  );
};

export default Visitors;
