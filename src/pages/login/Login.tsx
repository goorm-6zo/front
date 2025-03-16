import { useState } from 'react';
import TextButton from '../../components/common/button/TextButton.tsx';
import { Input } from '../../components/common/input/Input.tsx';
import Layout from '../../components/common/layout/Layout.tsx';
import * as S from './Login.style.ts';
import { loginUser } from '../../api/login/login.ts';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [test1, setTest1] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await loginUser({ email, password });
    if (response) {
      console.log('로그인 성공');
      window.location.href = '/dashboard';
    }
  };

  return (
    <Layout hasHeader={false} hasFooter={false}>
      <S.LoginContainer>
        <S.Logo src="/logo.png" alt="logo" />
        <S.Title>MASK PASS</S.Title>
        <S.LoginForm onSubmit={handleLogin}>
          <Input
            variant="outlined"
            // type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            variant="outlined"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextButton type="submit">로그인</TextButton>
        </S.LoginForm>
        <span>회원가입</span>
        <span>test</span>
      </S.LoginContainer>
    </Layout>
  );
}
