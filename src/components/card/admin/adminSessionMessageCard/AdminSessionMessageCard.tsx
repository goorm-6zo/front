import * as S from './AdminSessionMessageCard.style';
import { Tag } from '../../../common/tag/Tag';
import ProfileContents from '../../profileContents/ProfileContents';

type AdminSessionMessageCardProps = {
  title: string;
  name?: string | null;
  from?: string | null;
  id: number;
  date: string;
  location: string;
  selected: boolean;
};

const AdminSessionMessageCard: React.FC<AdminSessionMessageCardProps> = ({
  title,
  name,
  from,
  id,
  location,
  date,
  selected,
}) => {
  return (
    <S.CardContainer $selected={selected}>
      <S.ContentsContainer>
        <S.HeaderContainer>
          <S.TopContainer>
            <S.TagContainer>
              <Tag variant={selected ? 'tertiary' : 'secondary'}>{date}</Tag>
              <Tag variant={selected ? 'tertiary' : 'secondary'}>{location}</Tag>
            </S.TagContainer>
          </S.TopContainer>
          <S.TitleWrapper>{title}</S.TitleWrapper>
        </S.HeaderContainer>
        {name && <ProfileContents name={name ?? null} from={from ?? null} />}
      </S.ContentsContainer>
    </S.CardContainer>
  );
};

export default AdminSessionMessageCard;
