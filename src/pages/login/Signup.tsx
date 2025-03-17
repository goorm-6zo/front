import { useForm } from 'react-hook-form';
import { signup } from '../../api/login/signup';
const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const result = await signup(data);
      console.log('회원가입 성공:', result);
      alert('회원가입 완료!');
    } catch (error) {
      alert('회원가입 실패. 다시 시도해주세요.');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="이름" required />
        <input
          {...register('email')}
          type="text"
          placeholder="이메일"
          required
        />
        <input
          {...register('password')}
          type="password"
          placeholder="비밀번호"
          required
        />

        <input
          {...register('phone')}
          type="tel"
          placeholder="전화번호"
          required
        />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default SignUp;
