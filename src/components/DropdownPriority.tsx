import { useState } from 'react';
import IconArrowUp from '../assets/arrow-up.svg';
import IconArrowDown from '../assets/arrow-down.svg';
import ResourcesPriority from '../resources/priority.json';

function DropdownPriority(props: any) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [priorities, setPriorities] = useState<Array<any>>(ResourcesPriority.data);
  const [priority, setPriority] = useState<string>('');

  function handleClickDropdown() {
    setShowDropdown(!showDropdown);
  }

  function handleClickPriority(val: string) {
    setPriority(val);
    setShowDropdown(false);
    props.onChange(val);
  }

  function getPriority(name: string) {
    const result = priorities.find((val) => val.priority == name);
    return result;
  }

  return (
    <div data-cy="modal-add-dropdown" className="relative">
      <div
        onClick={handleClickDropdown}
        className="
        w-48
        border
        border-gray-200
        cursor-pointer
        bg-white
        hover:bg-gray-50
      "
      >
        <div
          className="
          p-3
          flex
          justify-between
          items-center
        "
        >
          {!priority ? (
            <div>Pilih priority</div>
          ) : (
            <div
              className="
              flex
              gap-4
              items-center
            "
            >
              <div className={`rounded-full w-3 h-3 ${getPriority(priority).color}`}></div>
              <div>{getPriority(priority).name}</div>
            </div>
          )}
          <img src={showDropdown ? IconArrowUp : IconArrowDown} alt="choose" />
        </div>
      </div>
      <div
        data-cy="modal-add-priority-dropdown"
        className={`
        w-48
        border
        border-gray-200
        absolute
        z-20
        ${!showDropdown && 'hidden'}
      `}
      >
        {priorities.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClickPriority(value.priority)}
            id={value.priority}
            data-cy="modal-add-priority-item"
            className="
            p-3
            border-b
            border-gray-200
            flex
            gap-4
            items-center
            cursor-pointer
            bg-white
            hover:bg-gray-100
          "
          >
            <div className={`rounded-full w-3 h-3 ${value.color}`}></div>
            <div>{value.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownPriority;
