import Icon from '../../components/common/icon/Icon';
import * as S from './ReservationComplete.style';
const ReservationComplete = () => {
  return (
    <S.Container>
      <S.Box>
        <Icon name="strokebottom" />
        <S.Cont>예매가 완료되었습니다!</S.Cont>
      </S.Box>
    </S.Container>
  );
};

export default ReservationComplete;
