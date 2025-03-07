import TextButton from '../../components/common/button/TextButton.tsx';
import { Input } from '../../components/common/input/Input.tsx';
import Layout from '../../components/common/layout/Layout.tsx';
import * as S from './Login.style.ts';

export default function Login() {
  return (
    <Layout hasHeader={false} hasFooter={false}>
      <S.LoginContainer>
        <S.Logo src="/logo.png" alt="logo" />
        <S.Title>MASK PASS</S.Title>
        <S.LoginForm>
          <Input variant="outlined" type="email" placeholder="이메일" />
          <Input variant="outlined" type="password" placeholder="비밀번호" />
        </S.LoginForm>
        <TextButton>로그인</TextButton>
        <span>회원가입</span>
      </S.LoginContainer>
    </Layout>
  );
}
