import { useEffect, useState } from 'react';
import { getQRCode } from '../../api/admin/qrcode/qrcode';
import { useSearchParams } from 'react-router-dom';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './DeviceConnect.style';

//components
import Img from '../../components/common/img/Img';
const DeviceConnect = () => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  const conferenceId = searchParams.get('conferenceId');
  const sessionId = searchParams.get('sessionId');
  console.log(conferenceId, sessionId);
  useEffect(() => {
    const getQR = async () => {
      if (!conferenceId || !sessionId) {
        alert('잘못된 접근입니다.');
        return;
      }
      try {
        const result = await getQRCode(conferenceId, sessionId);
        console.log('QR 생성 성공:', result.qrImageBase64);
        setQrCode(result.qrImageBase64);
      } catch (error) {
        alert('QR 코드 생성 실패. 다시 시도해주세요.');
      }
    };
    getQR();
  }, []);

  return (
    <ResponsiveLayout>
      <S.TitleBox>
        <S.Title>기기 연결</S.Title>
        <S.SubTitle>
          현장에서 사용할 기기를 화면에 표시된 QR로 연결하세요
        </S.SubTitle>
      </S.TitleBox>
      <S.Container>
        <S.QRContainer
          style={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            alignItems: 'center',
          }}
        >
          {qrCode && <Img imageUrl={qrCode} alt="QR Code" size={294} />}
        </S.QRContainer>
      </S.Container>
    </ResponsiveLayout>
  );
};

export default DeviceConnect;
