import React, { useState, useRef } from 'react';
import CtaButton from '../button/CtaButton.tsx';
import IconButton from '../button/IconButton.tsx';
import * as S from './Popup.style.ts';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  const handleUpload = () => {
    alert('이미지가 첨부되었습니다!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <S.PopupOverlay onClick={onClose}>
      <S.PopupContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButtonWrapper>
          <IconButton onClick={onClose}>×</IconButton>
        </S.CloseButtonWrapper>
        <S.UploadContainer>
          {preview && <S.PreviewImage src={preview} alt="Preview" />}
          <CtaButton onClick={() => fileInputRef.current?.click()}>파일 선택</CtaButton>
          <S.HiddenInput type="file" accept="image/*" ref={fileInputRef} onChange={handleFileSelect} />
          {preview && <CtaButton onClick={handleUpload}>첨부하기</CtaButton>}
        </S.UploadContainer>
      </S.PopupContent>
    </S.PopupOverlay>
  );
};

export default Popup;
