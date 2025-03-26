import * as S from './ProfileContents.style';
import Profile from '../../common/profile/Profile';

type ProfileProps = {
  name?: string | null;
  from?: string | null;
  imageUrl?: string;
  isActive?: boolean;
};

const ProfileContents: React.FC<ProfileProps> = ({
  imageUrl,
  name,
  from,
  isActive = false,
}) => {
  return (
    <S.ProfileContainer $isActive={isActive}>
      <Profile imageUrl={imageUrl} />
      <S.ProfileTextContainer>
        <S.NameItem>{name}</S.NameItem>
        <S.InfoItem>{from}</S.InfoItem>
      </S.ProfileTextContainer>
    </S.ProfileContainer>
  );
};

export default ProfileContents;
