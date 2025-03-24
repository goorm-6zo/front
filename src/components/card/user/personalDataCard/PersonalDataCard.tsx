import { useAuthStore } from '../../../../store/useAuthStore';
import * as S from './PersonalDataCard.style';

type PersonalDataCardProps = {};

const PersonalDataCard: React.FC<PersonalDataCardProps> = () => {
  const { userInfo } = useAuthStore();
  return (
    <S.CardContainer>
      <S.TextContainer>
        <S.TextWrapper>이름</S.TextWrapper>
        <S.TextWrapper>{userInfo?.name}</S.TextWrapper>
      </S.TextContainer>
      <S.TextContainer>
        <S.TextWrapper>전화번호</S.TextWrapper>
        <S.TextWrapper>{userInfo?.phone}</S.TextWrapper>
      </S.TextContainer>
      <S.TextContainer>
        <S.TextWrapper>이메일</S.TextWrapper>
        <S.TextWrapper>{userInfo?.email}</S.TextWrapper>
      </S.TextContainer>
    </S.CardContainer>
  );
};

export default PersonalDataCard;
