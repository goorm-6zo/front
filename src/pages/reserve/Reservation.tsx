import * as S from './Reservation.style';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import { useState, useEffect } from 'react';

import { createReservation } from '../../api/reserve/createReservation';
import { getConferenceInfo } from '../../api/reserve/getConferenceInfo';

//components
import { Input } from '../../components/common/input/Input';
import CtaButton from '../../components/common/button/CtaButton';
import CheckBoxList from '../../components/reservation/session/CheckBoxList';

const checkBoxItems = [
  { id: 1, label: '첫 번째 체크박스', checked: false },
  { id: 2, label: '두 번째 체크박스', checked: true },
  { id: 3, label: '세 번째 체크박스', checked: false },
  { id: 4, label: '네 번째 체크박스', checked: false },
  { id: 5, label: '다섯 번째 체크박스', checked: false },
  { id: 6, label: '여섯 번째 체크박스', checked: false },
];

const Reservation = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sessionIds, setSessionIds] = useState([]);
  const [hasSession, setHasSession] = useState(true);
  const conferenceId = 1;

  const handleReservation = async () => {
    if (!name || !phone) {
      alert('이름과 전화번호를 입력해주세요.');
      return;
    }

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
    } catch (error) {
      console.error('예약 실패:', error);
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
          const sessionIds = data.sessions.map(
            (session: { id: number }) => session.id,
          );
          setSessionIds(sessionIds);
        }
      } catch (error) {
        console.error('컨퍼런스 조회 실패:', error);
      }
    };

    fetchConferenceInfo();
  }, []);

  return (
    <ResponsiveLayout>
      <S.Container>
        <S.ReservationTitle>
          A컨퍼런스
          <br /> 행사 예매하기
        </S.ReservationTitle>
        <S.ReservationForm id="reservation-form">
          {hasSession && <CheckBoxList items={checkBoxItems} />}

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
        </S.ReservationForm>

        <S.BtnWrapper>
          <CtaButton
            type="button"
            variant="primary"
            onClick={handleReservation}
          >
            예약하기
          </CtaButton>
        </S.BtnWrapper>
      </S.Container>
    </ResponsiveLayout>
  );
};

export default Reservation;
