import { useState } from 'react';

import IconTrash from '../assets/trash.svg';
import IconPencil from '../assets/pencil.svg';
import { ToDoItem } from '../interfaces';
import ResourcesPriority from '../resources/priority.json';

function CardItem(props: {
  data: ToDoItem;
  onChange: Function;
  onRemove: Function;
  onEdit: Function;
}) {
  const [item, setItem] = useState<ToDoItem>(props.data);
  const [priorities, setPriorities] = useState<Array<any>>(ResourcesPriority.data);

  function handleCheckbox() {
    const newItem = {
      id: item.id,
      title: item.title,
      priority: item.priority,
      activity_group_id: item.activity_group_id,
      is_active: item.is_active == 1 ? 0 : 1
    };
    setItem(newItem);
    props.onChange(newItem);
  }

  function handleRemove() {
    props.onRemove(item);
  }

  function handleEdit() {
    props.onEdit(item);
  }

  function priorityToColor(priority: string): string {
    const result = priorities.find((value) => value.priority == priority);
    if (!result) {
      return 'bg-transparent';
    }
    return result.color;
  }

  return (
    <div
      data-cy="todo-item"
      className="
      bg-white
      rounded-xl
      p-5
      w-full
      h-20
      shadow-md
      flex justify-between items-center
    "
    >
      <div className="flex gap-3 items-center">
        <input
          data-cy="todo-item-checkbox"
          className="w-5 h-5 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
          type="checkbox"
          defaultChecked={item.is_active == 0}
          onChange={handleCheckbox}
        />
        <div>
          <div
            data-cy="todo-item-priority-indicator"
            className={`rounded-full w-3 h-3 ${priorityToColor(item.priority)}`}
          ></div>
        </div>
        {item.is_active ? (
          <div data-cy="todo-item-title" className="font-medium">
            {item.title}
          </div>
        ) : (
          <div className="line-through text-gray-400">{item.title}</div>
        )}
        <img data-cy="todo-item-edit-button" onClick={handleEdit} className="
              transform
              active:scale-100
              hover:scale-110
              cursor-pointer
            " src={IconPencil} alt="Edit" />
        {/* <button data-cy="todo-item-edit-button" onClick={handleEdit}>
          <img src={IconPencil} alt="Edit" />
        </button> */}
      </div>
      <img data-cy="todo-item-delete-button" onClick={handleRemove} className="
              transform
              active:scale-100
              hover:scale-110
              cursor-pointer
            " src={IconTrash} alt="Delete" />
      {/* <button data-cy="todo-item-delete-button" onClick={handleRemove}>
        <img src={IconTrash} alt="Delete" />
      </button> */}
    </div>
  );
}

export default CardItem;
