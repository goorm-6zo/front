import React from 'react';
import * as S from './Profile.style';

type ProfileProps = {
  size?: number;
  imageUrl?: string;
};

const Profile: React.FC<ProfileProps> = ({ size = 40, imageUrl }) => {
  return (
    <S.ProfileContainer size={size}>
      {imageUrl && <S.ProfileImage src={imageUrl} alt="프로필 이미지" />}
    </S.ProfileContainer>
  );
};

export default Profile;
