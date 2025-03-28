import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { editUsersPhone } from '../../../api/authorization/editUsersPhone';
import { sendVerifyMsg } from '../../../api/authorization/sendVerifyMsg';
import { isPhoneVerified as checkPhoneVerification } from '../../../api/authorization/isPhoneVerified';
import { signup } from '../../../api/login/signup';

import ResponsiveLayout from '../../../components/common/layout/ResponsiveLayout';
import Footer from '../../../components/common/footer/Footer';
import Btn from '../../../components/common/button/btn/Btn';
import CtaBtn from '../../../components/common/button/ctabtn/CtaBtn';
import { Input } from '../../../components/common/input/Input';

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
  const searchParams = new URLSearchParams(location.search);

  const [phone, setPhone] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isPhoneVerified, setIsPhoneVerified] = useState<boolean>(false);

  if (!userData) {
    return <S.ErrorMsgWrapper>잘못된 접근입니다.</S.ErrorMsgWrapper>;
  }

  const { name, email, password } = userData;

  /***
   * 분기점1: '/authorization' 접근 시,
   * (1) hasPhone=True인 경우, 바로 '/dashboard'로 리디렉션
   * (2) 나머지는 여기에 존재.
   */
  useEffect(() => {
    if (searchParams.get('hasPhone') === 'true') {
      navigate('/dashboard');
    }
  }, []);

  // 인증번호 요청
  const handleSendAuthCode = () => {
    if (!phone) {
      alert('전화번호를 입력해주세요.');
      return;
    }

    sendVerifyMsg(phone);
    alert(`인증번호가 ${phone}으로 전송되었습니다.`);
  };

  // 인증번호 확인
  const handleVerifyAuthCode = async () => {
    try {
      const state = await checkPhoneVerification(phone, authCode);
      if (state) {
        setIsPhoneVerified(true);
        alert('전화번호 인증이 완료되었습니다.');
      } else {
        alert('인증번호가 일치하지 않습니다.');
      }
    } catch (e) {
      console.error(e);
      alert('인증 확인 중 오류가 발생했습니다.');
    }
  };

  /***
   * 분기점2: 가입하기 버튼 클릭 시,
   * (1) hasPhone=False인 경우, 전화번호 저장하는 api 호출
   * (2) 회원가입으로 들어온 경우, 회원가입 로직 호출
   */
  const handleSubmit = async () => {
    if (!isPhoneVerified) {
      alert('전화번호 인증을 완료해주세요.');
      return;
    }

    // hasPhone이 false인 경우 / 회원가입 로직인 경우 분리
    if (searchParams.get('hasPhone') === 'false') {
      try {
        const result = await editUsersPhone(phone);
        console.log('본인인증 성공:', result);
        navigate('/dashboard');
      } catch (error) {
        alert('본인인증 실패. 다시 시도해주세요.');
      }
    } else {
      try {
        const result = await signup({ name, email, phone, password });
        console.log('본인인증 성공:', result);
        navigate('/login');
      } catch (error) {
        alert('본인인증 실패. 다시 시도해주세요.');
      }
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

        {/* 전화번호 입력 */}
        <S.InputContainer>
          <S.InputWrapper>
            <Input
              placeholder="전화번호"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </S.InputWrapper>

          <Btn variant="tertiary" onClick={handleSendAuthCode}>
            인증번호 전송
          </Btn>
        </S.InputContainer>

        {/* 인증번호 입력 */}
        <S.InputContainer>
          <S.InputWrapper2>
            <Input
              placeholder="인증번호"
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
            />
          </S.InputWrapper2>

          <Btn variant="tertiary" onClick={handleVerifyAuthCode}>
            확인
          </Btn>
        </S.InputContainer>

        <Footer>
          <CtaBtn onClick={handleSubmit} disabled={!isPhoneVerified}>
            가입하기
          </CtaBtn>
        </Footer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default Authorization;
