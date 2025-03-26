import Profile from '../../common/profile/Profile';
import * as S from './ProfileContainer.style';

type ProfileProps = {
  name: string;
  from: string;
  imageUrl?: string;
};

const ProfileContainer: React.FC<ProfileProps> = ({ imageUrl, name, from }) => {
  return (
    <S.ProfileContainer>
      <Profile imageUrl={imageUrl} />
      <S.ProfileTextContainer>
        <S.NameItem>{name}</S.NameItem>
        <S.InfoItem>{from}</S.InfoItem>
      </S.ProfileTextContainer>
    </S.ProfileContainer>
  );
};

export default ProfileContainer;
