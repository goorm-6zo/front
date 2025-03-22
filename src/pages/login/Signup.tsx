import { useForm } from 'react-hook-form';
import { signup } from '../../api/login/signup';
import { Input } from '../../components/common/input/Input';
import ResponsiveLayout from '../../components/common/layout/ResponsiveLayout';
import * as S from './Signup.style';
import CtaBtn from '../../components/common/button/ctabtn/CtaBtn';
import { Checkbox } from '../../components/common/checkbox/Checkbox';
import Footer from '../../components/common/footer/Footer';

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
    <ResponsiveLayout hasHeader={false}>
      <S.PageContainer>
        <S.PageTitleWrapper>회원가입</S.PageTitleWrapper>
        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name')} placeholder="이름" required />
          <input
            {...register('email')}
            type="text"
            placeholder="이메일"
            required
          />
          <input
            {...register('phone')}
            type="tel"
            placeholder="전화번호"
            required
          />
          <input
            {...register('password')}
            type="password"
            placeholder="비밀번호"
            required
          />
          <input
            {...register('password')}
            type="password"
            placeholder="비밀번호"
            required
          />
          <S.AgreeCardContainer>
            <S.AgreeAllContainer>
              <S.AgreeAllWrapper>
                <Checkbox checked={false} label="전체동의" />
              </S.AgreeAllWrapper>
            </S.AgreeAllContainer>

            <S.AgreePortionWrapper>
              <Checkbox
                variant="secondary"
                label="(필수) 서비스 이용약관에 동의합니다."
                onChange={() => {}}
              />
              <Checkbox
                variant="secondary"
                label="(필수) 개인정보 수집•이용에 동의합니다."
                onChange={() => {}}
              />
            </S.AgreePortionWrapper>
          </S.AgreeCardContainer>
          <Footer>
            <CtaBtn type="submit">가입하기</CtaBtn>
          </Footer>
        </S.FormContainer>
      </S.PageContainer>
    </ResponsiveLayout>
  );
};

export default SignUp;
