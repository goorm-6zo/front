import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../api/login/signup';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Signup.style';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import { Checkbox } from '../../components/common/checkbox/Checkbox';
import Footer from '../../components/common/footer/Footer';

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const result = await signup(data);
      console.log('회원가입 성공:', result);
      alert('회원가입 완료!');
      navigate('/login');
    } catch (error) {
      alert('회원가입 실패. 다시 시도해주세요.');
    }
  };

  const [allAgree, setAllAgree] = useState(false);
  const [firstAgree, setFirstAgree] = useState(false);
  const [secondAgree, setSecondAgree] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

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

  return (
    <ResponsiveLayout hasHeader={false}>
      <S.PageContainer>
        <S.PageTitleWrapper>회원가입</S.PageTitleWrapper>
        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name')} placeholder="이름" required />
          <input
            {...register('email')}
            type="text"
            placeholder="이메일"
            required
          />
          <input
            {...register('phone')}
            type="tel"
            placeholder="전화번호"
            required
          />

          <input
            {...register('password')}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {passwordError && <div>비밀번호가 일치하지 않습니다.</div>}

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
