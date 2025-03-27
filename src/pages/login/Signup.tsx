import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Signup.style';
import { Input } from '../../components/common/input/Input';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import Footer from '../../components/common/footer/Footer';
import { isEmailAvailable } from '../../api/login/isEmailAvailable';
import { Checkbox } from '../../components/common/checkbox/Checkbox';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [emailError, setEmailError] = useState('');

  // ✅ 동의 상태 관리
  const [firstAgree, setFirstAgree] = useState(false);
  const [secondAgree, setSecondAgree] = useState(false);
  const [allAgree, setAllAgree] = useState(false);

  // ✅ 전체동의 체크가 바뀔 때 개별도 따라감
  const handleAllAgreeToggle = () => {
    const newValue = !allAgree;
    setAllAgree(newValue);
    setFirstAgree(newValue);
    setSecondAgree(newValue);
  };

  // ✅ 개별 체크가 바뀔 때 전체동의도 자동 계산
  useEffect(() => {
    setAllAgree(firstAgree && secondAgree);
  }, [firstAgree, secondAgree]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email') {
      setEmailError('');
    }
  };

  const handleEmailBlur = async () => {
    if (!formData.email) return;

    try {
      const available = await isEmailAvailable(formData.email);
      if (!available) {
        setEmailError('중복된 이메일 주소입니다. 다른 이메일을 사용해주세요.');
      } else {
        setEmailError('');
      }
    } catch (error) {
      setEmailError('이메일 확인 중 오류가 발생했습니다.');
    }
  };

  const allFieldsFilled = Object.values(formData).every(
    (val) => val.trim() !== '',
  );

  const isPasswordMatched = formData.password === formData.confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!allFieldsFilled) {
      setErrorMsg('모든 필드를 입력해주세요.');
      return;
    }

    if (!isPasswordMatched) {
      setErrorMsg('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (emailError) {
      setErrorMsg('이메일 중복 여부를 확인해주세요.');
      return;
    }

    if (!firstAgree || !secondAgree) {
      setErrorMsg('필수 동의 항목에 체크해주세요.');
      return;
    }

    navigate('/authorization', {
      state: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    });
  };

  const isButtonDisabled =
    !allFieldsFilled ||
    !isPasswordMatched ||
    !!emailError ||
    !firstAgree ||
    !secondAgree;

  return (
    <ResponsiveLayout hasHeader={false} hasFooter>
      <S.PageContainer>
        <S.PageTitleWrapper>회원가입</S.PageTitleWrapper>
        <S.FormContainer onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
          />
          {emailError && (
            <S.ErrorMsgWrapper>
              <S.ErrorMsg>{emailError}</S.ErrorMsg>
            </S.ErrorMsgWrapper>
          )}

          <Input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="비밀번호 확인"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {!isPasswordMatched && (
            <S.ErrorMsgWrapper>
              <S.ErrorMsg>비밀번호가 일치하지 않습니다.</S.ErrorMsg>
            </S.ErrorMsgWrapper>
          )}

          {/* ✅ 동의 영역 */}
          <S.AgreeCardContainer>
            <S.AgreeAllContainer>
              <Checkbox
                variant="primary"
                label="전체동의"
                checked={allAgree}
                onChange={handleAllAgreeToggle}
              />
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
                label="(필수) 개인정보 수집·이용에 동의합니다."
                checked={secondAgree}
                onChange={() => setSecondAgree((prev) => !prev)}
              />
            </S.AgreePortionWrapper>
          </S.AgreeCardContainer>

          {errorMsg && (
            <S.ErrorMsgWrapper>
              <S.ErrorMsg>{errorMsg}</S.ErrorMsg>
            </S.ErrorMsgWrapper>
          )}

          <Footer>
            <CtaBtn type="submit" disabled={isButtonDisabled}>
              가입하기
            </CtaBtn>
          </Footer>
        </S.FormContainer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default SignUp;
