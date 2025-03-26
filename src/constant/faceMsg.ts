export type ToastState = 'default' | 'success' | 'error';

export const faceMsg: Record<ToastState, { msg: string }> = {
  default: {
    msg: '정면을 바라봐 주세요.',
  },
  success: {
    msg: '인증되었습니다.',
  },
  error: {
    msg: '얼굴인식을 실패 했습니다.',
  },
};
