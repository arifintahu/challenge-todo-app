import { useState } from 'react';
import ResourcesPriority from '../resources/priority.json';

function DropdownSimple(props: any) {
  const [priorities, setPriorities] = useState<Array<any>>(ResourcesPriority.data);
  const [priority, setPriority] = useState<string>('very-high');

  function handleClickPriority(e: any) {
    setPriority(e.target.value);
    props.onChange(e.target.value);
  }

  return (
    <div>
      <select data-cy="modal-add-priority-dropdown" className="w-40 border border-gray-200 p-2" value={priority} onChange={handleClickPriority}>
        {priorities.map((value, index) => (
          <option data-cy="modal-add-priority-item" key={index} value={value.priority}>{value.name}</option>
        ))}
      </select>
    </div>
  );
}

export default DropdownSimple;
