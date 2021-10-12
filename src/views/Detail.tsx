import ButtonAdd from '../components/ButtonAdd'
import ModalAddItem from '../components/ModalAddItem'
import CardItem from '../components/CardItem'
import ImageNewItem from '../assets/newitem.svg'
import { getDetailActivity, updateActivity } from '../api/activity'
import { useState, useEffect } from 'react'
import IconArrowLeft from '../assets/arrow-left.svg'
import IconPencil from '../assets/pencil.svg'
import { Link, useParams } from 'react-router-dom'
import { ToDoItem } from '../interfaces'

function Detail() {
  const [title, setTitle] = useState<string>("")
  const [isActivityUpdate, setIsActivityUpdate] = useState<boolean>(false)
  const [items, setItems] = useState<ToDoItem[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const params: any = useParams()

  function handleUpdateTitle(e: any) {
    setTitle(e.target.value)
  }

  function handleUpdateActivityDone() {
    if (isActivityUpdate) {
      postUpdateActivity()
      setIsActivityUpdate(false)
    }
  }

  function handleModalClose(value: boolean) {
    setShowModal(value)
  }

  function postUpdateActivity() {
    if (params?.id && title) {
      updateActivity({
        id: params?.id,
        title: title
      })
      .then(response => {
        if (response.status == 200) {
          console.log('title updated')
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  function detailActivity() {
    if (params?.id) {
      getDetailActivity(params.id)
      .then(response => {
        if (response.status == 200) {
          setTitle(response.data.title)
          setItems(response.data.todo_items)
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  useEffect(() => {
    if (title === "") {
      detailActivity()
    }
  })

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <div onMouseLeave={handleUpdateActivityDone}
          className="
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
                    value={title}
                    className="
                      bg-transparent
                      border-gray-700
                      border-b-2
                      focus:outline-none
                    "
                    onChange={handleUpdateTitle}
                ></input>
                :
                <div>{title}</div>
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
        <ButtonAdd onClick={() => setShowModal(true)}/>
      </div>
      <div className="w-full mt-10">
        {
          items.length ?
            <div className="flex flex-col gap-4">
              {
                items.map((item, index) => 
                  <CardItem 
                    key={index}
                    data={item}
                  />
                )
              }
            </div>
          :
            <div className="flex justify-center mt-10">
              <img className="max-w-lg" src={ImageNewItem} alt="New Item" />
            </div>
        }
      </div>
      {
        showModal &&
        <ModalAddItem onClose={handleModalClose}/>
      }
      
    </div>
  )
}

export default Detail
  