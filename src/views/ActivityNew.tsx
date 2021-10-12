import ButtonAdd from '../components/ButtonAdd'
import ModalAddItem from '../components/ModalAddItem'
import ImageNewItem from '../assets/newitem.svg'
import { createActivity } from '../api/activity'
import { useState, useEffect } from 'react'
import IconArrowLeft from '../assets/arrow-left.svg'
import IconPencil from '../assets/pencil.svg'
import { Link } from 'react-router-dom'

function ActivityNew() {
  const [activity, setActivity] = useState<string>("New Activity")
  const [isActivityUpdate, setIsActivityUpdate] = useState<boolean>(false)
  const [toDoItems, setToDoItems] = useState([])
  const [showModal, setShowModal] = useState<boolean>(false)

  function handleUpdateActivity(e: any) {
    setActivity(e.target.value)
  }

  function handleUpdateActivityEnter(e: any) {
    if (e.key === 'Enter') {
        setIsActivityUpdate(false)
    }
  }

  function handleModalClose(value: boolean) {
    setShowModal(value)
  }

  useEffect(() => {
    
  })

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <div className="
            font-bold
            text-lg
            lg:text-xl
            flex
            gap-1
            items-center
        ">
            <Link to="/">
                <img src={IconArrowLeft} alt="Back" />
            </Link>
            {
                isActivityUpdate ?
                <input
                    type="text"
                    value={activity}
                    onChange={handleUpdateActivity}
                    onKeyDown={handleUpdateActivityEnter}
                ></input>
                :
                <div>{activity}</div>
            }
            
            <div onClick={() => setIsActivityUpdate(true)}  className="
              transform
              active:scale-100
              hover:scale-110
              cursor-pointer
            ">
                <img src={IconPencil} alt="Edit" />
            </div>
        </div>
        <div onClick={() => setShowModal(true)}>
          {/* <ButtonAdd/> */}
        </div>
      </div>
      <div className="w-full mt-10">
        {
          toDoItems.length ?
            <div className="flex flex-wrap gap-4">
              
            </div>
          :
            <div className="flex justify-center mt-10">
              <img className="max-w-lg" src={ImageNewItem} alt="New Item" />
            </div>
        }
      </div>
      {
        showModal ?
        <ModalAddItem onClose={handleModalClose}/>
        :
        ''
      }
      
    </div>
  )
}

export default ActivityNew
  