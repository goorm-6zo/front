import { useRef, useState } from 'react';
import { Checkbox } from '../../components/common/checkbox/Checkbox';
import { Textarea } from '../../components/common/input/Input';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './MessageSend.style.ts';
import Notify from '../../components/common/notify/Notify.tsx';
import { useTheme } from 'styled-components';
import Img from '../../components/common/img/Img.tsx';
import Icon from '../../components/common/icon/Icon.tsx';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn.tsx';
import Footer from '../../components/common/footer/Footer.tsx';

interface CheckboxItemProps {
  key: 'all' | 'attendees' | 'nonAttendees';
  label: string;
}

const checkboxes: CheckboxItemProps[] = [
  { key: 'all', label: '전체' },
  { key: 'attendees', label: '참석자' },
  { key: 'nonAttendees', label: '미참석자' },
];

const MessageSend = () => {
  const [checkedItems, setCheckedItems] = useState<CheckboxItemProps['key'][]>(
    [],
  );
  const [message, setMessage] = useState('');
  const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleAllCheckbox = () => {
    setCheckedItems((prev) =>
      prev.length === checkboxes.length ? [] : checkboxes.map(({ key }) => key),
    );
  };

  const handleSingleCheckbox = (key: CheckboxItemProps['key']) => {
    let updatedCheckedItems = checkedItems.includes(key)
      ? checkedItems.filter((item) => item !== key)
      : [...checkedItems, key];

    const individualKeys = checkboxes
      .filter(({ key }) => key !== 'all')
      .map(({ key }) => key);

    if (individualKeys.every((item) => updatedCheckedItems.includes(item))) {
      updatedCheckedItems = ['all', ...individualKeys];
    } else {
      updatedCheckedItems = updatedCheckedItems.filter(
        (item) => item !== 'all',
      );
    }

    setCheckedItems(updatedCheckedItems);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 데이터 전송
  };

  return (
    <ResponsiveLayout>
      <S.TitleContainer>
        <S.Title>메시지 전송</S.Title>
      </S.TitleContainer>
      <Notify
        icon="fillwarning"
        color={theme.colors.icon.white}
        backgroundColor={theme.colors.icon.notice}
      >
        작성하신 내용은 문자 메세지로 전송됩니다.
      </Notify>
      <form onSubmit={handleSubmit}>
        <S.Destination>
          <S.DestinationLabel>발송 대상</S.DestinationLabel>
          {checkboxes.map(({ key, label }) => (
            <Checkbox
              key={key}
              checked={checkedItems.includes(key)}
              onChange={() =>
                key === 'all' ? handleAllCheckbox() : handleSingleCheckbox(key)
              }
              label={label}
            />
          ))}
        </S.Destination>
        <Textarea
          placeholder="내용을 입력하세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <S.ImgContainer>
          <S.BtnBox>
            <S.StyledBtn
              variant="secondary"
              state="default"
              onClick={handleClick}
            >
              이미지 추가
              <input
                type="file"
                key={preview || 'new'}
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </S.StyledBtn>
            <S.BtnDescription>최대 1개까지 가능합니다</S.BtnDescription>
          </S.BtnBox>
          {preview && (
            <S.ImgBox>
              <S.CloseBtn onClick={handleImageDelete}>
                <Icon name="strokeclose" size="s" />
              </S.CloseBtn>
              <Img imageUrl={preview} size={128} />
            </S.ImgBox>
          )}
        </S.ImgContainer>
        <Footer>
          <CtaBtn>전송하기</CtaBtn>
        </Footer>
      </form>
    </ResponsiveLayout>
  );
};

export default MessageSend;
