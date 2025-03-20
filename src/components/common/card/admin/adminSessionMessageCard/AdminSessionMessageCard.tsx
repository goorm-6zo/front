import * as S from './AdminSessionMessageCard.style';
import Profile from '../../profile/Profile';
import { Tag } from '../../../tag/Tag.style';

type AdminSessionMessageCardProps = {
  title: string;
  name: string;
  from: string;
  state?: 'default' | 'done';
};

const AdminSessionMessageCard: React.FC<AdminSessionMessageCardProps> = ({
  title,
  name,
  from,
  state = 'default',
}) => {
  return (
    <S.CardContainer>
      <S.ContentsContainer>
        <S.HeaderContainer>
          <S.TagContainer>
            <Tag variant="primary">구역 A</Tag>
            <Tag variant="secondary">시간</Tag>
            <Tag variant="secondary">장소</Tag>
          </S.TagContainer>
          <S.TitleWrapper>{title}</S.TitleWrapper>
        </S.HeaderContainer>
        <Profile name={name} from={from} />
      </S.ContentsContainer>
    </S.CardContainer>
  );
};

export default AdminSessionMessageCard;
