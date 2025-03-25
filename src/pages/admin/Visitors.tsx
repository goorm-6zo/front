import AdminEntryCard from '../../components/common/card/admin/adminEntryCard/AdminEntryCard';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Visitors.style.ts';
import useConferenceData from '../../hooks/useConferenceData.ts';

const Visitors = () => {
  const { conferenceDataQuery } = useConferenceData();

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
    </ResponsiveLayout>
  );
};

export default Visitors;
