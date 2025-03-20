import * as S from './AdminSessionCard.style';
import Profile from '../../profile/Profile';
import Btn from '../../../button/btn/Btn';
import { Tag } from '../../../tag/Tag.style';

type AdminSessionCardProps = {
  title: string;
  name: string;
  from: string;
  state?: 'default' | 'done';
};

const AdminSessionCard: React.FC<AdminSessionCardProps> = ({
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

      <S.BtnContainer>
        <Btn variant="secondary" state="default">
          비활성화
        </Btn>
        <Btn variant="primary" state="default">
          기기연결
        </Btn>
      </S.BtnContainer>
    </S.CardContainer>
  );
};

export default AdminSessionCard;
