import * as S from './Loading.style';

export default function Loading() {
  return (
    <div>
      <S.LoadingOverlay>
        <S.LoadingImage src="/images/loading.gif" alt="loading" />
      </S.LoadingOverlay>
    </div>
  );
}
