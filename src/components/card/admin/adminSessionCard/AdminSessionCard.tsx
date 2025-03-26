import * as S from './AdminSessionCard.style';
import Profile from '../../profile/Profile';
import Btn from '../../../common/button/btn/Btn';
import { Tag } from '../../../common/tag/Tag';
import Icon from '../../../common/icon/Icon';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setActiveState } from '../../../../api/admin/active/setActiveState';
type AdminSessionCardProps = {
  title: string;
  name: string | null;
  from: string | null;
  id: number;
  date: string;
  location: string;
  isActive: boolean;
};

const AdminSessionCard: React.FC<AdminSessionCardProps> = ({
  title,
  name,
  from,
  id,
  location,
  date,
  isActive,
}) => {
  const navigate = useNavigate();
  const [_active, _setActive] = useState(isActive);

  const setActive = async () => {
    try {
      const res = await setActiveState(id);

      console.log('regg:', res);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <S.CardContainer>
      <S.ContentsContainer>
        <S.HeaderContainer>
          <S.TopContainer>
            <S.TagContainer>
              <Tag variant="tertiary">{date}</Tag>
              <Tag variant="tertiary">{location}</Tag>
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
        <Profile name={name} from={from} />
      </S.ContentsContainer>

      <S.BtnContainer>
        <Btn variant="secondary" state="default" onClick={() => setActive()}>
          비활성화
        </Btn>
        <Btn
          variant="primary"
          state="default"
          onClick={() => {
            navigate(`/admin/device-connect?conferenceId=1&sessionId=${id}`);
          }}
        >
          기기연결
        </Btn>
      </S.BtnContainer>
    </S.CardContainer>
  );
};

export default AdminSessionCard;
