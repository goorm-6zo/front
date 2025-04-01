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
import AdminSessionMessageCard from '../../components/card/admin/adminSessionMessageCard/AdminSessionMessageCard.tsx';
import useConferenceData from '../../hooks/useConferenceData.ts';
import { sendMessage } from '../../api/admin/message/message.ts';
import { Toast } from '../../components/common/toast/Toast.tsx';
import Loading from '../../components/common/loading/Loading.tsx';

interface CheckboxItemProps {
  key: 'ALL' | 'ATTENDEE' | 'NON_ATTENDEE';
  label: string;
}

const checkboxes: CheckboxItemProps[] = [
  { key: 'ALL', label: '전체' },
  { key: 'ATTENDEE', label: '참석자' },
  { key: 'NON_ATTENDEE', label: '미참석자' },
];

const MessageSend = () => {
  const theme = useTheme();
  const [checkedItems, setCheckedItems] = useState<CheckboxItemProps['key'][]>(
    [],
  );
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedConferences, setSelectedConferences] = useState<number[]>([]);
  const [selectedSessions, setSelectedSessions] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { conferenceDataQuery } = useConferenceData();

  if (conferenceDataQuery.isLoading || isLoading) {
    return <Loading />;
  }

  const handleConferenceClick = (conferenceId: number) => {
    setSelectedConferences((prev) =>
      prev.includes(conferenceId)
        ? prev.filter((id) => id !== conferenceId)
        : [...prev, conferenceId],
    );
  };

  const handleSessionClick = (sessionId: number) => {
    setSelectedSessions((prev) =>
      prev.includes(sessionId)
        ? prev.filter((id) => id !== sessionId)
        : [...prev, sessionId],
    );
  };

  // 체크 박스 선택
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
      .filter(({ key }) => key !== 'ALL')
      .map(({ key }) => key);

    if (individualKeys.every((item) => updatedCheckedItems.includes(item))) {
      updatedCheckedItems = ['ALL', ...individualKeys];
    } else {
      updatedCheckedItems = updatedCheckedItems.filter(
        (item) => item !== 'ALL',
      );
    }

    setCheckedItems(updatedCheckedItems);
  };

  // 이미지 파일 선택
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

    setIsLoading(true);

    const filteredCheckedItems = checkedItems.includes('ALL')
      ? ['ALL']
      : checkedItems;

    const formData = new FormData();

    formData.append(
      'noticeRequest',
      new Blob(
        [
          JSON.stringify({
            message,
            noticeTarget: filteredCheckedItems.join(','),
          }),
        ],
        { type: 'application/json' },
      ),
    );

    if (preview) {
      const base64Data = preview.split(',')[1];
      const byteString = atob(base64Data);
      const byteArray = new Uint8Array(
        Array.from(byteString).map((char) => char.charCodeAt(0)),
      );

      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });

      formData.append('image', file);
    }
    const conferenceIdToSend = selectedConferences[0] || 1;

    try {
      for (const sessionId of selectedSessions) {
        const response = await sendMessage({
          conferenceId: conferenceIdToSend,
          sessionId,
          formData,
        });
        if (response?.status === 200) {
          console.log('메시지 전송 성공', response.data);
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 2000);
        } else {
          console.log('메시지 전송 실패', response);
        }
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResponsiveLayout hasFooter={true}>
      <S.PageContainer>
        {showToast && (
          <S.Overlay>
            <S.StyledToast>
              <Toast state="default">전송이 완료되었습니다.</Toast>
            </S.StyledToast>
          </S.Overlay>
        )}
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
          <S.CardContainer>
            <AdminSessionMessageCard
              id={conferenceDataQuery.data?.id ?? 0}
              title={conferenceDataQuery.data?.name ?? ''}
              date={`${conferenceDataQuery.data?.startTime} - ${conferenceDataQuery.data?.endTime}`}
              location={conferenceDataQuery.data?.location ?? ''}
              selected={selectedConferences.includes(
                conferenceDataQuery.data?.id ?? -1,
              )}
              onClick={() =>
                handleConferenceClick(conferenceDataQuery.data?.id ?? -1)
              }
            />
            {conferenceDataQuery?.data?.sessions?.map((data) => (
              <AdminSessionMessageCard
                key={data.id}
                title={data.name}
                imageUrl={data.speakerImage}
                name={data.speakerName}
                from={data.speakerOrganization}
                id={data.id}
                date={`${data.startTime} - ${data.endTime}`}
                location={data.location}
                selected={selectedSessions.includes(data.id)}
                onClick={() => handleSessionClick(data.id)}
              />
            ))}
          </S.CardContainer>
          <S.Destination>
            <S.DestinationLabel htmlFor="발송 대상">
              발송 대상
            </S.DestinationLabel>
            {checkboxes.map(({ key, label }) => (
              <Checkbox
                key={key}
                checked={checkedItems.includes(key)}
                onChange={() =>
                  key === 'ALL'
                    ? handleAllCheckbox()
                    : handleSingleCheckbox(key)
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
                type="button"
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
            <CtaBtn type="submit">전송하기</CtaBtn>
          </Footer>
        </form>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default MessageSend;
