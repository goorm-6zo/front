import * as S from './AdminMessageCard.style';
import ProfileContents from '../../profileContents/ProfileContents';
import { Tag } from '../../../common/tag/Tag';

type AdminMessageCardProps = {
  title: string;
  name: string;
  from: string;
};

const AdminMessageCard: React.FC<AdminMessageCardProps> = ({
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
        <ProfileContents name={name} from={from} />
      </S.ContentsContainer>
    </S.CardContainer>
  );
};

export default AdminMessageCard;
