// pages/Authorization/AuthorizationCallback.tsx
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ResponsiveLayout from '../../../components/common/layout/ResponsiveLayout';
import AuthorizationForm from './AuthorizationForm';
import { editUsersPhone } from '../../../api/authorization/editUsersPhone';
import { linkUserReservation } from '../../../api/authorization/linkUserReservation';
import * as S from './Authorization.style';

const AuthorizationCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const hasPhone = searchParams.get('hasPhone');

  useEffect(() => {
    if (hasPhone === 'true') {
      navigate('/dashboard');
    }
  }, [hasPhone, navigate]);

  const handlePhoneSubmit = async (phone: string) => {
    try {
      const response = await editUsersPhone(phone);
      console.log('폰넘버 등록 : ', response);
    } catch {
      alert('전화번호 인증 실패. 다시 시도해주세요.');
      return;
    }

    try {
      const response = await linkUserReservation(phone);
      console.log('예약정보 연결 : ', response);
    } catch {
      alert('예약 정보 연결 실패. 관리자에게 문의해주세요.');
      return;
    }

    navigate('/dashboard');
  };

  return (
    <ResponsiveLayout hasHeader={false} hasFooter>
      <S.PageContainer>
        <S.PageTitleWrapper>
          <S.TitleWrapper>본인인증</S.TitleWrapper>
          <S.subtitleWrapper>전화번호 인증을 완료해주세요.</S.subtitleWrapper>
        </S.PageTitleWrapper>

        <AuthorizationForm onSubmit={handlePhoneSubmit} />
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default AuthorizationCallback;
