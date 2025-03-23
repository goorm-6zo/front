import Icon from '../icon/Icon';
import { IconName } from '../icon/types';
import * as S from './Notify.style';

interface NotifyProps {
  icon: IconName;
  color: string;
  onClick: () => void;
}

const Notify: React.FC<NotifyProps> = ({ icon, color, onClick }) => {
  return (
    <S.NotifyContainer onClick={onClick}>
      <Icon size={24} name={icon} color={color} />
      <S.TextWrapper>아직 얼굴 데이터가 등록되지 않았어요!</S.TextWrapper>
    </S.NotifyContainer>
  );
};

export default Notify;
