import React from 'react';
import * as S from './Sheet.style';
import Icon from '../icon/Icon';
import Btn from '../button/btn/Btn';
import IcnBtn from '../button/icnbtn/IcnBtn';
import SheetBtn from './SheetBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../api/login/logout';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sheet: React.FC<SheetProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // ✅ /admin 포함 여부로 구분
  const isAdmin = currentPath.startsWith('/admin');

  const handleLogout = async () => {
    const response = await logoutUser();
    if (response) {
      console.log('로그아웃 성공');
      window.location.reload();
      navigate('/');
    } else {
      console.log('로그아웃 실패');
    }
  };

  return (
    <S.SideSheetOverlay onClick={onClose} $isOpen={isOpen}>
      <S.SideSheetContainer $isOpen={isOpen}>
        <S.CloseButtonWrapper>
          <IcnBtn onClick={onClose}>
            <Icon name="strokeclose" />
          </IcnBtn>
        </S.CloseButtonWrapper>

        <S.ContentsWrapper>
          <S.ButtonWrapper>
            {isAdmin ? (
              <>
                <SheetBtn
                  onClick={() => navigate('/admin/dashboard')}
                  state={currentPath === '/admin/dashboard' ? 'on' : 'off'}
                >
                  행사 목록
                </SheetBtn>
                <SheetBtn
                  state={currentPath === '/admin/visitors' ? 'on' : 'off'}
                  onClick={() => navigate('/admin/visitors')}
                >
                  입장 현황
                </SheetBtn>
              </>
            ) : (
              <>
                <SheetBtn
                  onClick={() => navigate('/dashboard')}
                  state={currentPath === '/dashboard' ? 'on' : 'off'}
                >
                  홈
                </SheetBtn>
                <SheetBtn
                  state={currentPath === '/profile' ? 'on' : 'off'}
                  onClick={() => navigate('/profile')}
                >
                  나의 정보
                </SheetBtn>
              </>
            )}
          </S.ButtonWrapper>

          <S.BottomButtonWrapper>
            <Btn variant="quaternary">공지사항</Btn>
            <Btn variant="quaternary" onClick={handleLogout}>
              로그아웃
            </Btn>
          </S.BottomButtonWrapper>
        </S.ContentsWrapper>
      </S.SideSheetContainer>
    </S.SideSheetOverlay>
  );
};

export default Sheet;
