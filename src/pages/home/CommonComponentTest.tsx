import { useState } from 'react';
import Layout from '../../components/common/layout/Layout';
import IconButton from '../../components/common/button/IconButton';
import CtaButton from '../../components/common/button/CtaButton';
import TextButton from '../../components/common/button/TextButton';
import CtaButtonContainer from '../../components/common/container/CtaButtonContainer';
import Display from '../../components/common/display/Display';
import { Input, Textarea } from '../../components/common/input/Input';
import Table from '../../components/common/table/Table';
import { RadioButton } from '../../components/common/radio/Radio';
import Popup from '../../components/common/popup/Popup';
import Sheet from '../../components/common/sheet/Sheet';

import { IoIosArrowBack } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

const CommonComponentTest = () => {
  const [selected, setSelected] = useState<string>('전체');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(true);

  return (
    <Layout
      title="페이지 제목"
      hasHeader={true}
      hasFooter={true}
      titlePosition="center"
      leftButton={
        <IconButton onClick={() => console.log('클릭함!')}>
          <IoIosArrowBack size={20} />
        </IconButton>
      }
      rightButton={
        <IconButton onClick={() => console.log('클릭함!')}>
          <IoMenu size={20} />
        </IconButton>
      }
      footerContent={
        <CtaButtonContainer>
          <CtaButton variant="primary">제출합니다~~~</CtaButton>
          <CtaButton variant="secondary">정정합니다~~~</CtaButton>
        </CtaButtonContainer>
      }
    >
      <div>
        <TextButton>텍스트버튼입니다</TextButton>
      </div>
      {/* ⬇️ Display 컴포넌트 */}
      <Display textAlign="center" padding="30px 50px" height="auto" contentPosition="center" gap="20px">
        <img src="https://cdn.pixabay.com/photo/2025/02/26/09/58/bird-9432600_1280.jpg" width={'300px'} />
        5초만에 회원가입하고
        <br />
        편리한 행사를 경험해보세요
      </Display>

      {/* ⬇️ Input 컴포넌트 */}
      <Input variant="solid" placeholder="구역명" />
      <Input variant="outlined" placeholder="이메일" />
      <Textarea placeholder="전송할 메세지를 입력하세요." />

      {/* ⬇️ Popup 컴포넌트 */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen((prev) => !prev);
        }}
      />

      {/* ⬇️ Radio 컴포넌트 */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {['전체', '참석자', '미참석자'].map((option) => (
          <RadioButton key={option} label={option} checked={selected === option} onChange={() => setSelected(option)} />
        ))}
      </div>

      {/* ⬇️ Sheet 컴포넌트 */}
      <Sheet
        isOpen={isSheetOpen}
        onClose={() => {
          setIsSheetOpen((prev) => !prev);
        }}
      />

      {/* ⬇️ Table 컴포넌트 */}
      <Table data={dummy} />
    </Layout>
  );
};

export default CommonComponentTest;

const dummy = [
  { name: '김구역', present: true },
  { name: '최구역', present: true },
  { name: '황구역', present: false },
];
