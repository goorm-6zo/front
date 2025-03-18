import { useEffect, useState } from 'react';
import TextButton from '../../components/common/button/TextButton.tsx';
import { Input } from '../../components/common/input/Input.tsx';
import Layout from '../../components/common/layout/Layout.tsx';
import * as S from './Login.style.ts';
import { getUserData, loginUser } from '../../api/login/login.ts';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore.ts';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAuthStore();

  useEffect(() => {
    if (userInfo) {
      navigate(userInfo.role === 'ADMIN' ? '/admin/dashboard' : '/dashboard');
    }
  }, [userInfo, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await loginUser({ email, password });
    if (response) {
      const userData = await getUserData();
      setUserInfo(userData);
      console.log('로그인 성공');
      navigate(response.role === 'USER' ? '/dashboard' : '/admin/dashboard');
    }
  };

  return (
    <Layout hasHeader={false} hasFooter={false}>
      <S.LoginContainer>
        <S.Logo src="/logo.png" alt="logo" />
        <S.Title>MASK PASS</S.Title>
        <S.LoginForm onSubmit={handleLogin}>
          <Input
            state="default"
            // type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            state="default"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextButton type="submit">로그인</TextButton>
        </S.LoginForm>
        <Link to="/signup">회원가입</Link>
      </S.LoginContainer>
    </Layout>
  );
}
