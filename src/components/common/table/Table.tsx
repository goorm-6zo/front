import * as S from './Table.styles';

interface TableProps {
  data: {
    name: string;
    present: boolean;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <S.TableContainer>
      <S.Caption>{`예약자 ${data.length}명 / 참석자 ${data.filter((elem) => elem.present).length}명`}</S.Caption>

      <S.TableHeader>
        <S.TableRow>
          <S.TableHeaderData>이름</S.TableHeaderData>
          <S.TableHeaderData>참석 여부</S.TableHeaderData>
        </S.TableRow>
      </S.TableHeader>
      <S.TableBody>
        {data.map((elem, index) => (
          <S.TableRow key={index}>
            <S.TableData>{elem.name}</S.TableData>
            <S.TableData>{elem.present ? '참석' : '불참석'}</S.TableData>
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.TableContainer>
  );
};

export default Table;
