import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signup } from '../../api/login/signup';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import Footer from '../../components/common/footer/Footer';
import { Input } from '../../components/common/input/Input';
import * as S from './Authorization.style';
import Btn from '../../components/common/button/btn/Btn';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

const Authorization = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state as SignUpPayload | undefined;

  const [phone, setPhone] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  if (!userData) {
    return <S.ErrorMsgWrapper>잘못된 접근입니다.</S.ErrorMsgWrapper>;
  }

  // 인증번호 요청
  const handleSendAuthCode = () => {
    if (!phone) {
      alert('전화번호를 입력해주세요.');
      return;
    }

    const generatedCode = '123456'; // 실제 서비스에서는 백엔드에서 생성
    setSentCode(generatedCode);
    alert(`인증번호가 ${phone}으로 전송되었습니다.`);
  };

  // 인증번호 확인
  const handleVerifyAuthCode = () => {
    if (authCode === sentCode) {
      setIsPhoneVerified(true);
      alert('전화번호 인증이 완료되었습니다.');
    } else {
      alert('인증번호가 일치하지 않습니다.');
    }
  };

  const handleConfirm = async () => {
    if (!isPhoneVerified) {
      alert('전화번호 인증을 완료해주세요.');
      return;
    }

    try {
      const res = await signup({ ...userData, phone });
      console.log('회원가입 완료:', res);
      navigate('/login');
    } catch (error) {
      alert('회원가입에 실패했습니다.');
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

          <Btn variant="primary" onClick={handleSendAuthCode}>
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

          <Btn variant="primary" onClick={handleVerifyAuthCode}>
            확인
          </Btn>
        </S.InputContainer>

        <Footer>
          <CtaBtn onClick={handleConfirm} disabled={!isPhoneVerified}>
            가입하기
          </CtaBtn>
        </Footer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default Authorization;
