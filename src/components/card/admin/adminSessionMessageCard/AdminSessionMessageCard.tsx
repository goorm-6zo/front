import * as S from './AdminSessionMessageCard.style';
import ProfileContainer from '../../profileContainer/ProfileContainer';
import { Tag } from '../../../common/tag/Tag';

type AdminSessionMessageCardProps = {
  title: string;
  name: string;
  from: string;
};

const AdminSessionMessageCard: React.FC<AdminSessionMessageCardProps> = ({
  title,
  name,
  from,
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
        <ProfileContainer name={name} from={from} />
      </S.ContentsContainer>
    </S.CardContainer>
  );
};

export default AdminSessionMessageCard;
