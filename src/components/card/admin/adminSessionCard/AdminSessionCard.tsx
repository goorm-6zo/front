import * as S from './AdminSessionCard.style';
import ProfileContents from '../../profileContents/ProfileContents';
import Btn from '../../../common/button/btn/Btn';
import { Tag } from '../../../common/tag/Tag';
import Icon from '../../../common/icon/Icon';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setActiveState } from '../../../../api/admin/active/setActiveState';
type AdminSessionCardProps = {
  title: string;
  imageUrl: string | null;
  name: string | null;
  from: string | null;
  id: number;
  date: string;
  location: string;
  isActive: boolean;
};

const AdminSessionCard: React.FC<AdminSessionCardProps> = ({
  title,
  imageUrl,
  name,
  from,
  id,
  location,
  date,
  isActive,
}) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(isActive);

  const handleActive = async () => {
    try {
      const res = await setActiveState(id);
      setActive((prev) => !prev);
      console.log('regg:', res);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);
  return (
    <S.CardContainer>
      <S.ContentsContainer $isActive={active}>
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
              disabled={!active}
            >
              <Icon name="strokeright" color="#909298" size="mn" />
            </S.DetailBtn>
          </S.TopContainer>
          <S.TitleWrapper>{title}</S.TitleWrapper>
        </S.HeaderContainer>
        {name && (
          <ProfileContents imageUrl={imageUrl} name={name} from={from} />
        )}
      </S.ContentsContainer>

      <S.BtnContainer>
        <Btn
          variant={active ? 'tertiary' : 'primary'}
          state="default"
          onClick={() => handleActive()}
          isBlue={!active}
        >
          {active ? '비활성화' : '활성화'}
        </Btn>
        <Btn
          variant="primary"
          state={active ? 'default' : 'disabled'}
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
