import * as S from './SessionCard.style';
import Profile from '../Profile';
import Btn from '../../button/btn/Btn';

type SessionCardProps = {
  title: string;
  name: string;
  from: string;
  state?: 'default' | 'done';
};

const SessionCard: React.FC<SessionCardProps> = ({
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
            <div
              style={{
                width: '45px',
                height: '18px',
                backgroundColor: 'var(--blue-500)',
                borderRadius: '20px',
              }}
            ></div>
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

export default SessionCard;
