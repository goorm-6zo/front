import { useState } from 'react';
import { getQRCode } from '../../api/admin/qrcode/qrcode';
const DeviceConnect = () => {
  const [qrCode, setQrCode] = useState<string | null>(null);

  const getQR = async () => {
    try {
      const result = await getQRCode();
      console.log('QR 생성 성공:', result.qrImageBase64);
      setQrCode(result.qrImageBase64);
    } catch (error) {
      alert('QR 코드 생성 실패. 다시 시도해주세요.');
    }
  };

  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        alignItems: 'center',
      }}
    >
      {qrCode && <img src={qrCode} alt="QR Code" width={256} height={256} />}
      <button onClick={getQR} style={{ width: '100px' }}>
        기기 연동
      </button>
    </div>
  );
};

export default DeviceConnect;
