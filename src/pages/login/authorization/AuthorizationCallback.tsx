// pages/Authorization/AuthorizationCallback.tsx
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ResponsiveLayout from '../../../components/common/layout/ResponsiveLayout';
import AuthorizationForm from './AuthorizationForm';
import { editUsersPhone } from '../../../api/authorization/editUsersPhone';
import * as S from './Authorization.style';

const AuthorizationCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const hasPhone = searchParams.get('hasPhone');

  useEffect(() => {
    // hasPhone이 true면 인증 이미 완료된 상태 → 바로 대시보드로
    if (hasPhone === 'true') {
      navigate('/dashboard');
    }
  }, [hasPhone, navigate]);

  const handlePhoneSubmit = async (phone: string) => {
    try {
      await editUsersPhone(phone);
      alert('전화번호 인증 완료!');
      navigate('/dashboard');
    } catch {
      alert('전화번호 인증 실패. 다시 시도해주세요.');
    }
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
