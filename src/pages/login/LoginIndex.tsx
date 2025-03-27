import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './LoginIndex.style';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import TxtBtn from '../../components/common/button/txtbtn/TxtBtn';
import { useNavigate } from 'react-router-dom';
import { LogoMaskpass } from '../../assets/svg';

export default function LoginIndex() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  const handleClickOauth = () => {
    window.location.href = `https://server.maskpass.site/oauth2/authorization/kakao`;
  };

  return (
    <ResponsiveLayout hasHeader={false}>
      <S.PageContainer>
        <S.LoginContainer>
          <S.LogoWrapper>
            <LogoMaskpass />
          </S.LogoWrapper>
        </S.LoginContainer>
        <S.ButtonContainer>
          <CtaBtn variant="kakao" onClick={handleClickOauth}>
            카카오로 3초만에 시작하기
          </CtaBtn>
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
