import { useState } from 'react';
import CheckBox from './CheckBox';
import * as S from './CheckBoxList.style';
type CheckBoxItem = {
  id: number;
  label: string;
  checked: boolean;
};

type CheckBoxListProps = {
  items: CheckBoxItem[];
};

const CheckBoxList = ({ items }: CheckBoxListProps) => {
  const [checkList, setCheckList] = useState(items);

  const handleToggle = (id: number) => {
    setCheckList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <S.ListBox>
      {checkList.map((item) => (
        <CheckBox
          checked={item.checked}
          onChange={() => handleToggle(item.id)}
        />
      ))}
    </S.ListBox>
  );
};

export default CheckBoxList;
