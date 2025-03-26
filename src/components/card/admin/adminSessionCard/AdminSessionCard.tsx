import * as S from './AdminSessionCard.style';
import ProfileContainer from '../../profileContainer/ProfileContainer';
import Btn from '../../../common/button/btn/Btn';
import { Tag } from '../../../common/tag/Tag';
import Icon from '../../../common/icon/Icon';
import { useNavigate } from 'react-router-dom';
type AdminSessionCardProps = {
  title: string;
  name: string;
  from: string;
  id: number;
};

const AdminSessionCard: React.FC<AdminSessionCardProps> = ({
  title,
  name,
  from,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <S.CardContainer>
      <S.ContentsContainer>
        <S.HeaderContainer>
          <S.TopContainer>
            <S.TagContainer>
              <Tag variant="secondary">시간</Tag>
              <Tag variant="secondary">장소</Tag>
            </S.TagContainer>
            <S.DetailBtn
              onClick={() => {
                navigate(`/admin/conference-info/${id}`);
              }}
            >
              <Icon name="strokeright" color="#909298" size="mn" />
            </S.DetailBtn>
          </S.TopContainer>
          <S.TitleWrapper>{title}</S.TitleWrapper>
        </S.HeaderContainer>
        <ProfileContainer name={name} from={from} />
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
