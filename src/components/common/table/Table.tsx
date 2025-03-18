import * as S from './Table.style';

interface TableProps {
  data: {
    name: string;
    present: boolean;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <S.TableContainer>
      <S.TableHeader>
        <S.TableRow type="head">
          <S.TableHeaderData>참여자명</S.TableHeaderData>
          <S.TableHeaderData>참석 여부</S.TableHeaderData>
        </S.TableRow>
      </S.TableHeader>
      <S.TableBody>
        {data.map((elem, index) => (
          <S.TableRow
            key={index}
            type={index === data.length - 1 ? 'last' : 'body'}
          >
            <S.TableData>{elem.name}</S.TableData>
            <S.TableData present={elem.present}>
              {elem.present ? '참여' : '미참여'}
            </S.TableData>
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.TableContainer>
  );
};

export default Table;
