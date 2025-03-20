import { useState } from 'react';
import CheckBox from './CheckBox';
import * as S from './CheckBoxList.style';
import ReservationCard from '../../common/card/user/reservationCard/ReservationCard';
type CheckBoxItem = {
  id: number;
  summary: string;
  location: string;
};

type CheckBoxListProps = {
  items: CheckBoxItem[] | null;
};

const CheckBoxList = ({ items }: CheckBoxListProps) => {
  const [checkList, setCheckList] = useState(items);

  // const handleToggle = (id: number) => {
  //   setCheckList((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, checked: !item.checked } : item,
  //     ),
  //   );
  // };

  return (
    <S.ListBox>
      {items && items.map((item) => <ReservationCard item={item} />)}
    </S.ListBox>
  );
};

export default CheckBoxList;
