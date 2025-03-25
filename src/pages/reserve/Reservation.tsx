import * as S from './Reservation.style';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import { useState, useEffect, useCallback } from 'react';

import { createReservation } from '../../api/reserve/createReservation';

import { useNavigate } from 'react-router-dom';

//components
import { Input } from '../../components/common/input/Input';
import CheckBoxList from '../../components/reservation/session/CheckBoxList';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import { getConferenceInfo } from '../../api/admin/conference/getConferenceInfo';
type CheckBoxItem = {
  id: number;
  summary: string;
  location: string;
  checked: boolean;
};

const Reservation = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [hasSession, setHasSession] = useState(true);
  const [sessionItems, setSessionItems] = useState<CheckBoxItem[]>([]);
  const conferenceId = 1;
  const navigate = useNavigate();
  const handleReservation = async () => {
    if (!name || !phone) {
      alert('이름과 전화번호를 입력해주세요.');
      return;
    }
    const sessionIds = sessionItems
      .filter((session) => session.checked)
      .map((session) => session.id);
    try {
      const reserveData = {
        conferenceId,
        sessionIds,
        name,
        phone,
      };
      const response = await createReservation(reserveData);
      console.log('예약 성공:', response);
      alert('예약이 완료되었습니다.');
      navigate('/complete');
    } catch (error) {
      // console.error('예약 실패:', error);
      alert('예약에 실패했습니다.');
    }
  };

  useEffect(() => {
    const fetchConferenceInfo = async () => {
      try {
        const data = await getConferenceInfo(conferenceId);
        console.log(data);
        console.log('컨퍼런스 정보:', data.sessions);
        setHasSession(data.hasSessions);

        if (data.hasSessions) {
          const formattedSessions = data.sessions.map(
            (session: { id: number; summary: string; location: string }) => ({
              id: session.id,
              summary: session.summary,
              location: session.location,
              checked: false,
            }),
          );

          setSessionItems(formattedSessions);
        }
      } catch (error) {
        console.error('컨퍼런스 조회 실패:', error);
      }
    };

    fetchConferenceInfo();
  }, []);

  const handleToggle = useCallback((id: number) => {
    setSessionItems((prev) => {
      if (!prev) return prev;
      console.log('토글 실행');
      return prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      );
    });
  }, []);

  return (
    <ResponsiveLayout>
      <S.Container>
        <S.TitleBox>
          <S.ReservationTitle>
            if KAKAO 2025
            <br /> 행사 예매하기
          </S.ReservationTitle>
        </S.TitleBox>
        <S.ReservationForm id="reservation-form">
          {hasSession && (
            <CheckBoxList items={sessionItems} onToggle={handleToggle} />
          )}

          <S.InputBox>
            <S.InputDiv>
              <Input
                title="예매자"
                state="default"
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </S.InputDiv>

            <S.InputDiv>
              <Input
                title="전화번호"
                state="default"
                type="tel"
                placeholder="전화번호"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </S.InputDiv>
          </S.InputBox>
        </S.ReservationForm>

        <S.BtnWrapper>
          <CtaBtn type="button" variant="primary" onClick={handleReservation}>
            예약하기
          </CtaBtn>
        </S.BtnWrapper>
      </S.Container>
    </ResponsiveLayout>
  );
};

export default Reservation;
