import * as S from './SessionCard.style';
import Profile from '../../profile/Profile';
import { Tag } from '../../../tag/Tag';

type SessionCardProps = {
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  speakerName: string;
  speakerOrganization: string;
  speakerImage?: string | null;
};

const SessionCard: React.FC<SessionCardProps> = ({
  title,
  startTime,
  endTime,
  location,
  speakerName,
  speakerOrganization,
  // speakerImage,
}) => {
  return (
    <S.CardContainer>
      <S.HeaderContainer>
        <S.TagContainer>
          <Tag variant="tertiary">{startTime}</Tag>
          <Tag variant="tertiary">{endTime}</Tag>
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
