export interface PopupContent {
  icon?: boolean;
  title: string;
  subtitle?: string;
}

export const popupContents: Record<
  'register' | 'reRegister' | 'deleteInfo',
  PopupContent
> = {
  register: {
    icon: true,
    title: '얼굴 데이터를 등록하시겠습니까?',
    subtitle: '안심하세요! 사진이 아닌 특정 정보만 저장됩니다.',
  },
  reRegister: {
    icon: true,
    title: '얼굴 데이터를 재등록하시겠습니까?',
    subtitle: '안심하세요! 사진이 아닌 특정 정보만 저장됩니다.',
  },
  deleteInfo: {
    icon: false,
    title: '얼굴 데이터를 삭제하시겠습니까?',
    subtitle: '',
  },
};
