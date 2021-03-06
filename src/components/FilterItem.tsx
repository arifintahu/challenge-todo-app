import { useState } from 'react';
import IconArrowSort from '../assets/arrow-sort.svg';
import IconSortSelected from '../assets/sort-selected.svg';
import IconSortSelectionDown from '../assets/sort-selection-down.svg';
import IconSortSelectionUp from '../assets/sort-selection-up.svg';
import IconSortNameDown from '../assets/sort-name-down.svg';
import IconSortNameUp from '../assets/sort-name-up.svg';

function FilterItem(props: { onUpdate: Function }) {
  const [value, setValue] = useState<string>('terbaru');
  const [showItems, setShowItems] = useState<boolean>(false);
  const [items, setItems] = useState<Array<any>>([
    {
      name: 'Terbaru',
      value: 'terbaru',
      icon: IconSortSelectionDown
    },
    {
      name: 'Terlama',
      value: 'terlama',
      icon: IconSortSelectionUp
    },
    {
      name: 'A-Z',
      value: 'az',
      icon: IconSortNameDown
    },
    {
      name: 'Z-A',
      value: 'za',
      icon: IconSortNameUp
    },
    {
      name: 'Belum Selesai',
      value: 'belum-selesai',
      icon: IconSortSelectionDown
    },
    {
      name: 'Sudah Selesai',
      value: 'sudah-selesai',
      icon: IconSortSelectionDown
    }
  ]);

  function handleShowItems() {
    setShowItems(!showItems);
  }

  function handleSelected(val: string) {
    setValue(val);
    setShowItems(false);
    props.onUpdate(val);
  }

  function isSelected(val: string) {
    return val != value;
  }

  return (
    <div className="relative">
      <button
        data-cy="todo-sort-button"
        onClick={handleShowItems}
        className="
          border
          border
          border-gray-200
          rounded-full
          p-2
          cursor-pointer
          transform
          active:scale-100
          hover:scale-105
      "
      >
        <img src={IconArrowSort} alt="sort" />
      </button>
      <div
        data-cy="sort-parent"
        className={`
        absolute
        top-12
        w-48
        bg-white
        rounded-md
        shadow-md
        z-10
        ${!showItems && 'hidden'}
      `}
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSelected(item.value)}
            data-cy="sort-selection"
            className="
              w-full
              p-3
              flex
              justify-between
              items-center
              border-b
              border-gray-200
              cursor-pointer
              hover:bg-gray-50
            "
          >
            <div className="flex gap-3">
              <img loading="lazy" data-cy="sort-selection-icon" src={item.icon} alt={item.value} />
              <div data-cy="sort-selection-title">{item.name}</div>
            </div>
            <div className={`${isSelected(item.value) && 'hidden'}`}>
              <img
                loading="lazy"
                data-cy="sort-selection-selected"
                src={IconSortSelected}
                alt="terpilih"
              />
            </div>
          </button>
        ))}
        {/* <button
          onClick={() => handleSelected("terbaru")}
          data-cy="sort-selection"
          className="
            w-full
            p-3
            flex
            justify-between
            items-center
            border-b
            border-gray-200
            cursor-pointer
            hover:bg-gray-50
          "
        >
          <div className="flex gap-3">
            <img loading="lazy" data-cy="sort-selection-icon" src={IconSortSelectionDown} alt="icon" />
            <div data-cy="sort-selection-title">Terbaru</div>
          </div>
          <div className={`${isSelected("terbaru") && 'hidden'}`}>
            <img loading="lazy" data-cy="sort-selection-selected" src={IconSortSelected} alt="terpilih" />
          </div>
        </button> */}
      </div>
    </div>
  );
}

export default FilterItem;
