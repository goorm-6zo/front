interface IBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

const BOX_WIDTH = 230;
const BOX_HEIGHT = 230;
const DISTANCE_THRESHOLD = 50;

/**
 * 얼굴이 지정된 박스 안에 있는지 확인하는 함수
 * @param box 얼굴의 바운딩 박스
 * @param videoElement 비디오 엘리먼트
 * @returns 얼굴이 박스 안에 있는지 여부 (true/false)
 */

export const isFaceInBox = (
  box: IBox,
  videoElement: HTMLVideoElement,
): boolean => {
  console.log('안에 있는ㄴ지 계산중');
  const videoWidth = videoElement.videoWidth;
  const videoHeight = videoElement.videoHeight;

  // 박스 위치 계산
  const boxX = (videoWidth - BOX_WIDTH) / 2;
  const boxY = (videoHeight - BOX_HEIGHT) / 2;

  // 얼굴 중심 좌표
  const faceCenterX = box.x + box.width / 2;
  const faceCenterY = box.y + box.height / 2;

  // 박스 중심 좌표
  const boxCenterX = boxX + BOX_WIDTH / 2;
  const boxCenterY = boxY + BOX_HEIGHT / 2;

  // 중심 거리 계산
  const distanceX = Math.abs(faceCenterX - boxCenterX);
  const distanceY = Math.abs(faceCenterY - boxCenterY);

  return distanceX < DISTANCE_THRESHOLD && distanceY < DISTANCE_THRESHOLD;
};
