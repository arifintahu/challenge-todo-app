import IconTrash from '../assets/trash.svg'
import IconPencil from '../assets/pencil.svg'
import { ToDoItem } from '../interfaces'
import { useEffect, useState } from 'react'
import ResourcesPriority from '../resources/priority.json'

function CardItem(props: { 
    data: ToDoItem,
    onChange: Function,
    onRemove: Function,
    onEdit: Function
  }) {
  const [item, setItem] = useState<ToDoItem>(props.data)
  const [priorities, setPriorities] = useState<Array<any>>(ResourcesPriority.data)

  function handleCheckbox() {
    const newItem = {
      ... item,
      is_active: item.is_active == 1 ? 0 : 1
    }
    setItem(newItem)
    props.onChange(newItem)
  }

  function handleRemove() {
    props.onRemove(item)
  }

  function handleEdit() {
    props.onEdit(item)
  }

  function priorityToColor(priority: string): string {
    const result = priorities.find(value => value.priority == priority)
    if (!result) {
      return 'bg-transparent'
    }
    return result.color
  }

  useEffect(() => {
    setItem(props.data)
  })

  return (
    <div
    data-cy="card-item" 
    className="
      bg-white
      rounded-xl
      p-5
      w-full
      h-20
      shadow-md
      flex justify-between items-center
    ">
      <div className="flex gap-3 items-center">
        <div>
          <input 
            className="transform scale-150"
            type="checkbox"
            defaultChecked={item.is_active == 0}
            onChange={handleCheckbox}
          />
        </div>
        <div>
          <div className={`rounded-full w-3 h-3 ${priorityToColor(item.priority)}`}></div>
        </div>
        {
          item.is_active ?
          <div className="font-medium">{item.title}</div> :
          <div className="line-through text-gray-400">{item.title}</div>
        }
        <div onClick={handleEdit} className="
          transform
          active:scale-100
          hover:scale-110
          cursor-pointer
        ">
          <img src={IconPencil} alt="Edit" />
        </div>
      </div>
      <div onClick={handleRemove} className="
        transform
        active:scale-100
        hover:scale-110
        cursor-pointer
        ">
        <img src={IconTrash} alt="Delete" />
      </div>
    </div>
  )
}

export default CardItem
    