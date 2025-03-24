import { useState, useEffect } from 'react';
import * as S from './CheckBoxList.style';
import ReservationCard from '../../card/user/reservationCard/ReservationCard';
type CheckBoxItem = {
  id: number;
  summary: string;
  location: string;
  checked: boolean;
};

type CheckBoxListProps = {
  items: CheckBoxItem[] | null;
  onToggle: (id: number) => void;
};

const CheckBoxList = ({ items, onToggle }: CheckBoxListProps) => {
  const [checkList, setCheckList] = useState<CheckBoxItem[] | null>(items);
  useEffect(() => {
    if (items) setCheckList(items);
  }, [items]);

  return (
    <S.ListBox>
      {checkList &&
        checkList.map((item) => (
          <ReservationCard item={item} onToggle={onToggle} />
        ))}
    </S.ListBox>
  );
};

export default CheckBoxList;
