import { useState } from 'react'
import IconClose from '../assets/close.svg'
import ButtonSave from './ButtonSave'
import ResourcesPriority from '../resources/priority.json'

function ModalAddItem(props: any) {
  const [priorities, setPriorities] = useState<Array<any>>(ResourcesPriority.data)
  const [priority, setPriority] = useState<string>("very-high")
  const [title, setTitle] = useState<string>("")
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  function handleClose() {
    props.onClose(false)
  }

  function handleSelect(e: any) {
    setPriority(e.target.value)
  }

  function handleTitle(e: any) {
    setTitle(e.target.value)
    setIsDisabled(e.target.value == "")
  }

  function handleSave() {
    if (priority && title) {
      props.onSave({
        title: title,
        priority: priority
      })
    }
  }

  return (
    <div className="
      absolute
      top-0
      left-0
      w-screen
      h-screen
      p-5
      z-20
      bg-gray-700
      bg-opacity-25
    ">
      <div className="
        bg-white
        rounded-lg
        shadow-md
        m-auto
        max-w-xl
      ">
        <div className="flex justify-between px-5 py-3">
          <div className="font-bold">Tambah List Item</div>
          <div onClick={handleClose} className="
            transform
            active:scale-100
            hover:scale-110
            cursor-pointer
          ">
            <img src={IconClose} alt="Close" />
          </div>
        </div>
        <div className="border-t-2 border-gray-200"/>
        <div className="p-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="uppercase font-bold text-xs">Nama List Item</div>
            <input 
              className="w-full border border-gray-200 p-2"
              type="text"
              placeholder="Tambahkan nama list item"
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="uppercase font-bold text-xs">Priority</div>
            <select 
              className="w-40 border border-gray-200 p-2"
              value={priority} onChange={handleSelect}
            >
              {
                priorities.map((value, index) => 
                  <option key={index} value={value.priority}>
                    {value.name}
                  </option>
                )
              }
            </select>
          </div>
        </div>
        <div className="border-t-2 border-gray-200"/>
        <div className="px-5 py-3 flex justify-end">
          <ButtonSave onClick={handleSave} disabled={isDisabled}/>
        </div>
      </div>
    </div>
  )
}
  
export default ModalAddItem
    