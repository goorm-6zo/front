import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import { useAuthStore } from '../../store/useAuthStore';
const UserDashboard = () => {
  const { userInfo } = useAuthStore();
  return (
    <ResponsiveLayout>
      <div>
        메인
        <div>유저 정보</div>
        <div>
          <div>이름: {userInfo?.name}</div>
          <div>이메일: {userInfo?.email}</div>
          <div>전화번호: {userInfo?.phone}</div>
        </div>
      </div>
    </ResponsiveLayout>
  );
};

export default UserDashboard;
