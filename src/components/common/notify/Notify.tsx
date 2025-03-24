import Icon from '../icon/Icon';
import { IconName } from '../icon/types';
import * as S from './Notify.style';

interface NotifyProps {
  icon: IconName;
  color?: string;
  backgroundColor?: string;
  onClick: () => void;
}

const Notify: React.FC<NotifyProps> = ({
  icon,
  color,
  backgroundColor,
  onClick,
}) => {
  return (
    <S.NotifyContainer onClick={onClick}>
      <S.TextWrapper>
        <Icon
          size={24}
          name={icon}
          color={color}
          backgroundColor={backgroundColor}
        />
        아직 얼굴 데이터가 등록되지 않았어요!
      </S.TextWrapper>
      <Icon name="strokeright" size={16} />
    </S.NotifyContainer>
  );
};

export default Notify;
