interface IBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

const size =
  window.innerWidth > window.innerHeight
    ? window.innerHeight
    : window.innerWidth;
const BOX_WIDTH = size / 2;
const BOX_HEIGHT = size / 2;

const DISTANCE_THRESHOLD = size / 10;

export const isFaceInBox = (
  box: IBox,
  videoElement: HTMLVideoElement,
): boolean => {
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
