import * as S from './Profile.styled';

type ProfileProps = {
  name: string;
  from: string;
};

const Profile: React.FC<ProfileProps> = ({ name, from }) => {
  return (
    <S.ProfileContainer>
      <div
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'var(--blue-200)',
          borderRadius: '20px',
        }}
      ></div>
      <S.ProfileTextContainer>
        <S.NameItem>{name}</S.NameItem>
        <S.InfoItem>{from}</S.InfoItem>
      </S.ProfileTextContainer>
    </S.ProfileContainer>
  );
};

export default Profile;
