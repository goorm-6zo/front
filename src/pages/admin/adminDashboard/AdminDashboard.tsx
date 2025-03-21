import { useEffect } from 'react';
import { getConferenceInfo } from '../../../api/admin/conference/getConferenceInfo';
import * as S from './AdminDashboard.style';

// type confType = {
//   id: number;
//   name: string;
//   description: string;
//   location: string;
//   conferenceAt: string;
//   capacity: string;
//   hasSessions: boolean;
// };
const AdminDashboard = () => {
  // const [confDatas, setConfDatas] = useState<confType[]>([]);

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const res = await getConferenceInfo(1);
        console.log('컨퍼런스 데이터:', res);
        // setConfDatas(res);
      } catch (error) {
        console.error('컨퍼런스 데이터 조회 실패', error);
      }
    };

    fetchConferences();
  }, []);

  //임시 디자인
  return (
    <S.Container>
      <S.Title>관리자 대시보드</S.Title>
      {/* <S.CardGrid>
        {confDatas.map((conf) => (
          <S.ConferenceCard key={conf.id}>
            <S.CardTitle>{conf.name}</S.CardTitle>
            <S.CardInfo>📍 장소: {conf.location}</S.CardInfo>
            <S.CardInfo>
              📅 일정: {new Date(conf.conferenceAt).toLocaleDateString()}
            </S.CardInfo>
            <S.CardInfo>👥 최대 참석: {conf.capacity}명</S.CardInfo>
            <S.CardInfo>
              {conf.hasSessions ? '✅ 세션 포함' : '❌ 세션 없음'}
            </S.CardInfo>
            <S.CardDescription>{conf.description}</S.CardDescription>
          </S.ConferenceCard>
        ))}
      </S.CardGrid> */}
    </S.Container>
  );
};

export default AdminDashboard;
