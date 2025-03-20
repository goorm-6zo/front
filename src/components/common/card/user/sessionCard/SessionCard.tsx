import * as S from './SessionCard.style';
import Profile from '../../profile/Profile';
import { Tag } from '../../../tag/Tag';

type SessionCardProps = {
  title: string;
  time: string;
  location: string;
  speakerName: string;
  speakerOrganization: string;
  speakerImage?: string | null;
};

const SessionCard: React.FC<SessionCardProps> = ({
  title,
  time,
  location,
  speakerName,
  speakerOrganization,
  // speakerImage,
}) => {
  // 날짜와 시간 분리 (만약 time이 "2023-04-25 14:00-15:30" 형식이라면)
  const [date, timeRange] = time.includes(' ') ? time.split(' ') : ['', time];

  return (
    <S.CardContainer>
      <S.HeaderContainer>
        <S.TagContainer>
          <Tag variant="tertiary">{date}</Tag>
          <Tag variant="tertiary">{timeRange}</Tag>
          <Tag variant="primary">{location}</Tag>
        </S.TagContainer>
        <S.TitleWrapper>{title}</S.TitleWrapper>
      </S.HeaderContainer>
      <Profile
        name={speakerName}
        from={speakerOrganization}
        // imageUrl={speakerImage}
      />
    </S.CardContainer>
  );
};

export default SessionCard;
