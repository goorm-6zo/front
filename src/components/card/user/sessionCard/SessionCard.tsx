import * as S from './SessionCard.style';
import ProfileContainer from '../../profileContainer/ProfileContainer';
import { Tag } from '../../../common/tag/Tag';

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const dayIndex = date.getDay();

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = days[dayIndex];

  return `${mm}.${dd} (${dayName})`;
};

const formatTime = (isoString1: string, isoString2: string) => {
  const date1 = new Date(isoString1);
  const date2 = new Date(isoString2);

  const hh1 = String(date1.getHours()).padStart(2, '0');
  const mm1 = String(date1.getMinutes()).padStart(2, '0');

  const hh2 = String(date2.getHours()).padStart(2, '0');
  const mm2 = String(date2.getMinutes()).padStart(2, '0');

  return `${hh1}:${mm1}-${hh2}:${mm2}`;
};

type SessionCardProps = {
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  speakerImage?: string;
  speakerName: string;
  speakerOrganization: string;
};

const SessionCard: React.FC<SessionCardProps> = ({
  title,
  startTime,
  endTime,
  location,
  speakerName,
  speakerOrganization,
  speakerImage,
}) => {
  return (
    <S.CardContainer>
      <S.HeaderContainer>
        <S.TagContainer>
          <Tag variant="tertiary">{formatDate(startTime)}</Tag>
          <Tag variant="tertiary">{formatTime(startTime, endTime)}</Tag>
          <Tag variant="primary">{location}</Tag>
        </S.TagContainer>
        <S.TitleWrapper>{title}</S.TitleWrapper>
      </S.HeaderContainer>
      <ProfileContainer
        name={speakerName}
        from={speakerOrganization}
        imageUrl={speakerImage}
      />
    </S.CardContainer>
  );
};

export default SessionCard;
