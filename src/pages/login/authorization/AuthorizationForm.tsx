import { useState } from 'react';

import { sendVerifyMsg } from '../../../api/authorization/sendVerifyMsg';
import { isPhoneVerified as checkPhoneVerification } from '../../../api/authorization/isPhoneVerified';

import Footer from '../../../components/common/footer/Footer';
import Btn from '../../../components/common/button/btn/Btn';
import CtaBtn from '../../../components/common/button/ctabtn/CtaBtn';
import { Input } from '../../../components/common/input/Input';

import * as S from './Authorization.style';

interface Props {
  onSubmit: (phone: string) => void;
  submitText?: string;
}

const AuthorizationForm = ({ onSubmit, submitText = '가입하기' }: Props) => {
  const [phone, setPhone] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleSendAuthCode = () => {
    if (!phone) return alert('전화번호를 입력해주세요.');
    sendVerifyMsg(phone);
    alert(`인증번호가 ${phone}으로 전송되었습니다.`);
  };

  const handleVerifyAuthCode = async () => {
    const result = await checkPhoneVerification(phone, authCode);
    setIsVerified(result);
    alert(result ? '전화번호 인증 완료!' : '인증번호가 일치하지 않습니다.');
  };

  const handleSubmit = () => {
    if (!isVerified) return alert('전화번호 인증을 해주세요.');
    onSubmit(phone);
  };

  return (
    <>
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
        <CtaBtn onClick={handleSubmit} disabled={!isVerified}>
          {submitText}
        </CtaBtn>
      </Footer>
    </>
  );
};

export default AuthorizationForm;
