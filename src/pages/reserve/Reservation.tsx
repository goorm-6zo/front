import * as S from './Reservation.style';
import Layout from '../../components/common/layout/Layout';
import { useState } from 'react';
import { Input } from '../../components/common/input/Input';
import CtaButton from '../../components/common/button/CtaButton';
import CheckBoxList from '../../components/reservation/session/CheckBoxList';

//dummy data1
const checkBoxItems = [
  { id: 1, label: '첫 번째 체크박스', checked: false },
  { id: 2, label: '두 번째 체크박스', checked: true },
  { id: 3, label: '세 번째 체크박스', checked: false },
  { id: 4, label: '네 번째 체크박스', checked: false },
  { id: 5, label: '다섯 번째 체크박스', checked: false },
  { id: 6, label: '여섯 번째 체크박스', checked: false },
];

const Reservation = () => {
  const [hasSession, _setHasSession] = useState(true);

  return (
    <Layout hasHeader={false} hasFooter={false}>
      <S.Container>
        <S.ReservationTitle>
          A컨퍼런스
          <br /> 행사 예매하기
        </S.ReservationTitle>
        <S.ReservationForm id="reservation-form">
          {hasSession && <CheckBoxList items={checkBoxItems} />}
          {/* 예매자 이름 */}
          <S.InputDiv>
            <Input
              title="예매자"
              state="default"
              type="text"
              placeholder="이름"
            />
          </S.InputDiv>

          {/* 전화번호 */}
          <S.InputDiv>
            <Input
              title="전화번호"
              state="default"
              type="tel"
              placeholder="전화번호"
            />
          </S.InputDiv>
        </S.ReservationForm>

        <S.BtnWrapper>
          <CtaButton type="submit" variant="primary" form="reservation-form">
            예약하기
          </CtaButton>
        </S.BtnWrapper>
      </S.Container>
    </Layout>
  );
};

export default Reservation;
