import FaceDataCard from '../../components/card/user/faceDataCard/FaceDataCard';
import PersonalDataCard from '../../components/card/user/personalDataCard/PersonalDataCard';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Profile.style';

const Profile = () => {
  // 여기서 얼굴정보 있는지 없는지 관리하기 => 따라서 카드 렌더링 및 팝업 띄우기

  return (
    <ResponsiveLayout>
      <S.PageContainer>
        <S.TopContainer>
          <S.PageTitleWrapper>나의 정보</S.PageTitleWrapper>
        </S.TopContainer>
        <PersonalDataCard />
        <FaceDataCard />
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default Profile;
