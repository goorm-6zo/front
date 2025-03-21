import { ArrowDownIcon } from '../../components/common/icon';
import * as S from './ReservationComplete.style';
const ReservationComplete = () => {
  return (
    <S.Container>
      <S.Box>
        <ArrowDownIcon />
        <S.Cont>예매가 완료되었습니다!</S.Cont>
      </S.Box>
    </S.Container>
  );
};

export default ReservationComplete;
