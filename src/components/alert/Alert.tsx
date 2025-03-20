import { Icon } from '../common/icon';
import * as S from './Alert.style';

const Alert = () => {
  return (
    <S.AlertContainer>
      <Icon size={24} name="hamburger" />
      <S.TextWrapper>아직 얼굴 데이터가 등록되지 않았어요!</S.TextWrapper>
    </S.AlertContainer>
  );
};

export default Alert;
