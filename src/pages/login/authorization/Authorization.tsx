// pages/Authorization/Authorization.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import { signup } from '../../../api/login/signup';
import AuthorizationForm from './AuthorizationForm';
import ResponsiveLayout from '../../../components/common/layout/ResponsiveLayout';
import * as S from './Authorization.style';

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

const Authorization = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state as SignUpPayload | undefined;

  if (!userData) {
    return <S.ErrorMsgWrapper>잘못된 접근입니다.</S.ErrorMsgWrapper>;
  }

  const handleSignup = async (phone: string) => {
    try {
      await signup({ ...userData, phone });
      alert('회원가입 완료!');
      navigate('/login');
    } catch {
      alert('회원가입 실패. 다시 시도해주세요.');
    }
  };

  return (
    <ResponsiveLayout hasHeader={false} hasFooter>
      <S.PageContainer>
        <S.PageTitleWrapper>
          <S.TitleWrapper>본인인증</S.TitleWrapper>
          <S.subtitleWrapper>
            안전한 사용을 위해 본인확인을 해주세요.
          </S.subtitleWrapper>
        </S.PageTitleWrapper>

        <AuthorizationForm onSubmit={handleSignup} />
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default Authorization;
