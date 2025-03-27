import { useEffect, useState } from 'react';
import { getConferenceInfo } from '../../../api/admin/conference/getConferenceInfo';
import * as S from './AdminDashboard.style';
import AdminSessionCard from '../../../components/card/admin/adminSessionCard/AdminSessionCard';
import ResponsiveLayout from '../../../components/common/layout/ResponsiveLayout';
import { formatTimeRange } from '../../../utils/time/timeFormat';
type sessionType = {
  id: number;
  name: string;
  description: string;
  location: string;
  conferenceAt: string;
  capacity: number;
  hasSessions: boolean;
  endTime: string;
  startTime: string;
  conferenceId: number;
  speakerImage: string | null;
  speakerName: string | null;
  speakerOrganization: string | null;
  isActive: boolean;
};

const AdminDashboard = () => {
  const [confDatas, setConfDatas] = useState<sessionType[]>([]);
  //컨퍼런스 아이디 수정
  const conferenceId = 1;
  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const res = await getConferenceInfo(conferenceId);
        console.log('세션 정보:', res.sessions);
        setConfDatas(res.sessions);
      } catch (error) {
        console.error('컨퍼런스 데이터 조회 실패', error);
      }
    };

    fetchConferences();
  }, []);

  return (
    <ResponsiveLayout hasHeaderIcon={true}>
      <S.TitleBox>
        <S.Title>행사 목록</S.Title>
        <S.SubTitle>얼굴 인증으로 입출입을 관리하는 행사 목록이에요</S.SubTitle>
      </S.TitleBox>
      <S.DataBox>
        {confDatas &&
          confDatas.map((data) => {
            const {
              id,
              name,
              endTime,
              startTime,
              speakerName,
              speakerOrganization,
              location,
              isActive,
            } = data;
            return (
              <AdminSessionCard
                title={name}
                date={formatTimeRange(startTime, endTime)}
                name={speakerName}
                from={speakerOrganization}
                id={id}
                location={location}
                isActive={isActive}
              />
            );
          })}
      </S.DataBox>
    </ResponsiveLayout>
  );
};

export default AdminDashboard;
