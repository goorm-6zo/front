import * as S from './Section.style';
import Profile from '../Profile';

type SectionProps = {
  title: string;
  name: string;
  from: string;
  state?: 'default' | 'done';
};

const Section: React.FC<SectionProps> = ({
  title,
  name,
  from,
  state = 'default',
}) => {
  return (
    <S.CardContainer>
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
    </S.CardContainer>
  );
};

export default Section;
