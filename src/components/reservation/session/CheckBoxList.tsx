import { useState, useEffect, useCallback } from 'react';
import * as S from './CheckBoxList.style';
import ReservationCard from '../../common/card/user/reservationCard/ReservationCard';
type CheckBoxItem = {
  id: number;
  summary: string;
  location: string;
  checked: boolean;
};

type CheckBoxListProps = {
  items: CheckBoxItem[] | null;
};

const CheckBoxList = ({ items }: CheckBoxListProps) => {
  const [checkList, setCheckList] = useState<CheckBoxItem[] | null>(items);
  useEffect(() => {
    if (items) setCheckList(items);
    // console.log(checkList);
  }, [items]);

  const handleToggle = useCallback((id: number) => {
    setCheckList((prev) => {
      if (!prev) return prev;
      console.log('토글 실행');
      return prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      );
    });
  }, []);

  return (
    <S.ListBox>
      {checkList &&
        checkList.map((item) => (
          <ReservationCard item={item} onToggle={handleToggle} />
        ))}
    </S.ListBox>
  );
};

export default CheckBoxList;
