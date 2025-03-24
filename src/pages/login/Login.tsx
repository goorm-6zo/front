import { useState } from 'react';
import { Input } from '../../components/common/input/Input.tsx';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout.tsx';
import * as S from './Login.style.ts';
import { loginUser } from '../../api/login/login.ts';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore.ts';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn.tsx';
import TxtBtn from '../../components/common/button/txtbtn/TxtBtn.tsx';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUserInfo } = useAuthStore();
  const [errorMsg, setErrorMsg] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await loginUser({ email, password });
    if (response) {
      setUserInfo(response);
      console.log('로그인 성공');
      navigate(response.role === 'USER' ? '/dashboard' : '/admin/dashboard');
    } else {
      setErrorMsg('이메일 또는 비밀번호를 확인하세요.');
      setInputError(true);
    }
  };

  const isDisabled = !email.trim() || !password.trim();

  return (
    <ResponsiveLayout hasHeader={false}>
      <S.PageContainer>
        <S.Title>이메일로 로그인하기</S.Title>
        <S.LoginContainer>
          <S.LoginForm onSubmit={handleLogin}>
            <Input
              state={inputError ? 'error' : 'default'}
              // type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              state={inputError ? 'error' : 'default'}
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.ErrorMsgWrapper>
              {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
            </S.ErrorMsgWrapper>
            <S.ButtonContainer>
              <CtaBtn
                type="submit"
                variant={isDisabled ? 'tertiary' : 'primary'}
                disabled={isDisabled}
              >
                로그인
              </CtaBtn>
            </S.ButtonContainer>
          </S.LoginForm>
          <S.TextContainer>
            <S.TxtLabel>아직 마스크패스 계정이 없으신가요?</S.TxtLabel>
            <S.StyledLink to="/signup">
              <TxtBtn>회원가입하기</TxtBtn>
            </S.StyledLink>
          </S.TextContainer>
        </S.LoginContainer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
}
