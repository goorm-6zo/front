import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './LoginIndex.style';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import TxtBtn from '../../components/common/button/txtbtn/TxtBtn';
import { useNavigate } from 'react-router-dom';

export default function LoginIndex() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  return (
    <ResponsiveLayout hasHeader={false}>
      <S.PageContainer>
        <S.LoginContainer>
          <S.Logo src="src/assets/images/maskpass-logo.svg" alt="logo" />
        </S.LoginContainer>
        <S.ButtonContainer>
          <CtaBtn variant="kakao">카카오로 3초만에 시작하기</CtaBtn>
          <CtaBtn onClick={handleClick}>이메일로 로그인하기</CtaBtn>
          <S.TextContainer>
            <S.StyledLink to="/signup">
              <TxtBtn>회원가입</TxtBtn>
            </S.StyledLink>
            <S.Line />
            <S.StyledLink to="/">
              <TxtBtn>문의하기</TxtBtn>
            </S.StyledLink>
          </S.TextContainer>
        </S.ButtonContainer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
}
