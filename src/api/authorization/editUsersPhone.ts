import API from '../axiosIntance';

export const editUsersPhone = async (phone: string) => {
  try {
    const response = await API.put('/users/phone', {
      params: {
        phone: phone,
      },
    });

    return response.data;
  } catch (error) {
    console.log('유저 전화번호 등록 실패', error);
  }
};
