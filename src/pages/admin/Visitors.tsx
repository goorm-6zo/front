import AdminEntryCard from '../../components/common/card/admin/adminEntryCard/AdminEntryCard';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Visitors.style.ts';
import useConferenceData from '../../hooks/useConferenceData.ts';
import FloatingBtn from '../../components/common/button/floatingbtn/FloatingBtn.tsx';
import { useNavigate } from 'react-router-dom';

const Visitors = () => {
  const { conferenceDataQuery } = useConferenceData();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/admin/message-send');
  };

  if (conferenceDataQuery.isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <ResponsiveLayout>
      <S.TitleContainer>
        <S.Title>입장 현황</S.Title>
        <S.Description>
          해당 화면에 얼굴 인식으로 입장한 방문자 수가 표시돼요
        </S.Description>
      </S.TitleContainer>
      <AdminEntryCard conferInfo={conferenceDataQuery.data ?? null} />
      <S.FloatingBtnContainer>
        <FloatingBtn onClick={handleNavigate}>메시지 보내기</FloatingBtn>
      </S.FloatingBtnContainer>
    </ResponsiveLayout>
  );
};

export default Visitors;
