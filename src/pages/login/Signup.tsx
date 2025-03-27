import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Signup.style';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import { Checkbox } from '../../components/common/checkbox/Checkbox';
import Footer from '../../components/common/footer/Footer';
import { Input } from '../../components/common/input/Input';
import { signup } from '../../api/login/signup';

const SignUp = () => {
  const navigate = useNavigate();

  // Input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Error handling
  const [passwordError, setPasswordError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Agreement states
  const [allAgree, setAllAgree] = useState(false);
  const [firstAgree, setFirstAgree] = useState(false);
  const [secondAgree, setSecondAgree] = useState(false);

  // 비밀번호 일치 여부 확인
  useEffect(() => {
    if (confirmPassword === '') {
      setPasswordError(true);
    } else {
      setPasswordError(password !== confirmPassword);
    }
  }, [password, confirmPassword]);

  // 개별 동의 상태가 바뀌면 전체 동의 상태도 바꿔줌
  useEffect(() => {
    setAllAgree(firstAgree && secondAgree);
  }, [firstAgree, secondAgree]);

  // 전체 동의 토글 시 개별 동의 상태도 같이 토글
  const handleAllAgreeToggle = () => {
    const newValue = !allAgree;
    setAllAgree(newValue);
    setFirstAgree(newValue);
    setSecondAgree(newValue);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordError || !allAgree) {
      setErrorMsg('비밀번호 확인 또는 약관 동의를 확인해주세요.');
      return;
    }

    try {
      const result = await signup({ name, email, phone, password });
      console.log('회원가입 성공:', result);
      alert('회원가입 완료!');
      navigate('/login');
    } catch (error) {
      setErrorMsg('회원가입 실패. 다시 시도해주세요.');
    }
  };

  return (
    <ResponsiveLayout hasHeader={false} hasFooter={true}>
      <S.PageContainer>
        <S.PageTitleWrapper>회원가입</S.PageTitleWrapper>
        <S.FormContainer onSubmit={handleSignup}>
          <Input
            state="default"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            state="default"
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            state="default"
            type="tel"
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            state="default"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            state="default"
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && (
            <S.ErrorMsgWrapper>
              <S.ErrorMsg>비밀번호가 일치하지 않습니다.</S.ErrorMsg>
            </S.ErrorMsgWrapper>
          )}

          <S.AgreeCardContainer>
            <S.AgreeAllContainer>
              <S.AgreeAllWrapper>
                <Checkbox
                  variant="primary"
                  label="전체동의"
                  checked={allAgree}
                  onChange={handleAllAgreeToggle}
                />
              </S.AgreeAllWrapper>
            </S.AgreeAllContainer>

            <S.AgreePortionWrapper>
              <Checkbox
                variant="secondary"
                label="(필수) 서비스 이용약관에 동의합니다."
                checked={firstAgree}
                onChange={() => setFirstAgree((prev) => !prev)}
              />
              <Checkbox
                variant="secondary"
                label="(필수) 개인정보 수집•이용에 동의합니다."
                checked={secondAgree}
                onChange={() => setSecondAgree((prev) => !prev)}
              />
            </S.AgreePortionWrapper>
          </S.AgreeCardContainer>

          <S.ErrorMsgWrapper>
            {errorMsg && <S.ErrorMsg>{errorMsg}</S.ErrorMsg>}
          </S.ErrorMsgWrapper>

          <Footer>
            <CtaBtn disabled={passwordError || !allAgree} type="submit">
              가입하기
            </CtaBtn>
          </Footer>
        </S.FormContainer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default SignUp;
