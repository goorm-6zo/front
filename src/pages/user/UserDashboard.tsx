import { useEffect, useState } from 'react';
import { getUserData } from '../../api/login/login';

interface User {
  name: string;
  email: string;
  phone: string;
}

const UserDashboard = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    getUserData()
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.log('유저 정보 조회 실패:', error);
        window.location.href = '/login';
      });
  }, []);

  return (
    <div>
      메인
      <div>유저 정보</div>
      {userInfo ? (
        <div>
          <div>이름: {userInfo.name}</div>
          <div>이메일: {userInfo.email}</div>
          <div>전화번호: {userInfo.phone}</div>
        </div>
      ) : (
        <span>로그인이 필요합니다!</span>
      )}
    </div>
  );
};

export default UserDashboard;
