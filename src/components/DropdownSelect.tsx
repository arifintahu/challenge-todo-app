import { useState } from 'react';
import ResourcesPriority from '../resources/priority.json';
import Select, { components } from 'react-select';
import IconArrowDown from '../assets/arrow-down.svg';

function DropdownSelect(props: any) {
  const [priorities, setPriorities] = useState<Array<any>>(ResourcesPriority.data);
  const [priority, setPriority] = useState<string>('very-high');

  function handlePriority(data: any) {
    setPriority(data.priority);
    props.onChange(data.priority);
  }

  const formatOptionLabel = (item: any) => (
    <div data-cy="modal-add-priority-item" className="flex">
      <div>{item.name}</div>
    </div>
  );

  const DropdownIndicator = () => {
    return (
      <div data-cy="modal-add-priority-dropdown" className="m-2">
        <img src={IconArrowDown} alt="choose" />
      </div>
    );
  };

  return (
    <div>
      <Select
        defaultValue={priorities[0]}
        onChange={handlePriority}
        formatOptionLabel={formatOptionLabel}
        components={{ DropdownIndicator }}
        options={priorities}
      />
    </div>
  );
}

export default DropdownSelect;
