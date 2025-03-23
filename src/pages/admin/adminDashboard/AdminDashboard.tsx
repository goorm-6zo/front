import { useEffect, useState } from 'react';
import { getConferenceInfo } from '../../../api/admin/conference/getConferenceInfo';
import * as S from './AdminDashboard.style';
import AdminSessionCard from '../../../components/common/card/admin/adminSessionCard/AdminSessionCard';
import ResponsiveLayout from '../../../components/common/layout/ResponsiveLayout';
type sessionType = {
  id: number;
  name: string;
  description: string;
  location: string;
  conferenceAt: string;
  capacity: number;
  hasSessions: boolean;
  endTime: string;
  conferenceId: number;
  speakerImage: string | null;
  speakerName: string | null;
  speakerOrganization: string | null;
};

const AdminDashboard = () => {
  const [confDatas, setConfDatas] = useState<sessionType[]>([]);

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const res = await getConferenceInfo(1);
        console.log('컨퍼런스 데이터:', res);
        setConfDatas(res.sessions);
      } catch (error) {
        console.error('컨퍼런스 데이터 조회 실패', error);
      }
    };

    fetchConferences();
  }, []);

  //임시 디자인
  return (
    <ResponsiveLayout>
      <S.TitleBox>
        <S.Title>행사 목록</S.Title>
        <S.SubTitle>얼굴 인증으로 입출입을 관리하는 행사 목록이에요</S.SubTitle>
      </S.TitleBox>
      <S.DataBox>
        {confDatas &&
          confDatas.map(() => (
            <AdminSessionCard title="제목" name="이름" from="from" />
          ))}
      </S.DataBox>
    </ResponsiveLayout>
  );
};

export default AdminDashboard;
