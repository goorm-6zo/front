import * as S from './SessionCard.style';
import Profile from '../../profile/Profile';
import { Tag } from '../../../tag/Tag';

type SessionCardProps = {
  title: string;
  name: string;
  from: string;
};

const SessionCard: React.FC<SessionCardProps> = ({ title, name, from }) => {
  return (
    <S.CardContainer>
      <S.HeaderContainer>
        <S.TagContainer>
          <Tag variant="tertiary">날짜</Tag>
          <Tag variant="tertiary">시간</Tag>
          <Tag variant="primary">장소</Tag>
        </S.TagContainer>
        <S.TitleWrapper>{title}</S.TitleWrapper>
      </S.HeaderContainer>
      <Profile name={name} from={from} />
    </S.CardContainer>
  );
};

export default SessionCard;
