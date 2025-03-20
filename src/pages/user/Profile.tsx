import FaceDataCard from '../../components/common/card/user/faceDataCard/FaceDataCard';
import PersonalDataCard from '../../components/common/card/user/personalDataCard/PersonalDataCard';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Profile.style';

const Profile = () => {
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
