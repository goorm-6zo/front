import { useState } from 'react';
import { Checkbox } from '../../components/common/checkbox/Checkbox';

interface CheckboxItemProps {
  key: 'all' | 'attendees' | 'nonAttendees';
  label: string;
}

const checkboxes: CheckboxItemProps[] = [
  { key: 'all', label: '전체' },
  { key: 'attendees', label: '참석자' },
  { key: 'nonAttendees', label: '미참석자' },
];

const MessageSend = () => {
  const [checkedItems, setCheckedItems] = useState<CheckboxItemProps['key'][]>(
    [],
  );

  const handleAllCheckbox = () => {
    setCheckedItems((prev) =>
      prev.length === checkboxes.length ? [] : checkboxes.map(({ key }) => key),
    );
  };

  const handleSingleCheckbox = (key: CheckboxItemProps['key']) => {
    let updatedCheckedItems = checkedItems.includes(key)
      ? checkedItems.filter((item) => item !== key)
      : [...checkedItems, key];

    const individualKeys = checkboxes
      .filter(({ key }) => key !== 'all')
      .map(({ key }) => key);

    if (individualKeys.every((item) => updatedCheckedItems.includes(item))) {
      updatedCheckedItems = ['all', ...individualKeys];
    } else {
      updatedCheckedItems = updatedCheckedItems.filter(
        (item) => item !== 'all',
      );
    }

    setCheckedItems(updatedCheckedItems);
  };

  return (
    <>
      <div>메시지 전송</div>
        {checkboxes.map(({ key, label }) => (
          <Checkbox
            key={key}
            checked={checkedItems.includes(key)}
            onChange={() =>
              key === 'all' ? handleAllCheckbox() : handleSingleCheckbox(key)
            }
            label={label}
          />
        ))}
    </>
  );
};

export default MessageSend;
