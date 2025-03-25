import FaceDataCard from '../../components/card/user/faceDataCard/FaceDataCard';
import PersonalDataCard from '../../components/card/user/personalDataCard/PersonalDataCard';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Profile.style';

const Profile = () => {
  return (
    <ResponsiveLayout hasHeaderIcon={true}>
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
