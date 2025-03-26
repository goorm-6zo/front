import Profile from '../../common/profile/Profile';
import * as S from './ProfileContainer.style';

type ProfileProps = {
  name: string;
  from: string;
  imageUrl?: string;
  opacity?: boolean;
};

const ProfileContainer: React.FC<ProfileProps> = ({
  imageUrl,
  name,
  from,
  opacity = false,
}) => {
  return (
    <S.ProfileContainer opacity={opacity}>
      <Profile imageUrl={imageUrl} />
      <S.ProfileTextContainer>
        <S.NameItem>{name}</S.NameItem>
        <S.InfoItem>{from}</S.InfoItem>
      </S.ProfileTextContainer>
    </S.ProfileContainer>
  );
};

export default ProfileContainer;
