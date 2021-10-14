import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getDetailActivity, updateActivity } from '../api/activity';
import { createItem, updateItem, removeItem } from '../api/item';

import ImageNewItem from '../assets/newitem.svg';
import IconArrowLeft from '../assets/arrow-left.svg';
import IconPencil from '../assets/pencil.svg';

import { ToDoItem } from '../interfaces';

import AlertRemove from '../components/AlertRemove';
import AlertInfo from '../components/AlertInfo';
import Loader from '../components/Loader';
import ButtonAdd from '../components/ButtonAdd';
import ModalAddItem from '../components/ModalAddItem';
import ModalUpdateItem from '../components/ModalUpdateItem';
import CardItem from '../components/CardItem';

function Detail() {
  const [title, setTitle] = useState<string>('');
  const [isActivityUpdate, setIsActivityUpdate] = useState<boolean>(false);
  const [items, setItems] = useState<ToDoItem[]>([]);
  const [item, setItem] = useState<ToDoItem>();
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const params: any = useParams();

  function handleUpdateTitle(e: any) {
    setTitle(e.target.value);
  }

  function handleUpdateActivityDone() {
    if (isActivityUpdate) {
      postUpdateActivity();
      setIsActivityUpdate(false);
    }
  }

  function handleModalClose(value: boolean) {
    setShowModalAdd(value);
  }

  function handleModalEditClose(value: boolean) {
    setShowModalEdit(value);
  }

  function handleCancelAlert(value: boolean) {
    setShowAlert(value);
  }

  function handleShowInfo(value: boolean) {
    setShowInfo(value);
  }

  function handleRemoveCardItem(data: ToDoItem) {
    setItem(data);
    setShowAlert(true);
  }

  function handleUpdateCardItem(data: any) {
    if (data) {
      postUpdateItem(data);
    }
  }

  function handleEditCardItem(data: ToDoItem) {
    if (data) {
      setItem(data);
      setShowModalEdit(true);
    }
  }

  function handleRemoveAlert(value: boolean) {
    if (value && item?.id) {
      removeItem(item?.id)
        .then((response) => {
          if (response.status == 200) {
            setShowAlert(false);
            setShowInfo(true);
            detailActivity();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleModalEditSave(data: {
    id: number;
    title: string;
    priority: string;
    is_active: number;
  }) {
    setIsButtonLoading(true);
    updateItem(data)
      .then((response) => {
        if (response.status == 200) {
          setShowModalEdit(false);
          setIsButtonLoading(false);
          detailActivity();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleModalSave(data: { title: string; priority: string }) {
    const { title, priority } = data;
    if (params?.id && title && priority) {
      setIsButtonLoading(true);
      createItem({
        activity_group_id: params?.id,
        title: title,
        priority: priority
      })
        .then((response) => {
          if (response.status == 201) {
            detailActivity();
            setIsButtonLoading(false);
            setShowModalAdd(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function postUpdateActivity() {
    if (params?.id && title) {
      updateActivity({
        id: params?.id,
        title: title
      })
        .then((response) => {
          if (response.status == 200) {
            console.log('activity updated');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function postUpdateItem(data: {
    id: number;
    title: string;
    priority: string;
    is_active: number;
  }) {
    updateItem(data)
      .then((response) => {
        if (response.status == 200) {
          console.log('item updated');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function detailActivity() {
    setIsLoading(true);
    setItems([]);
    if (params?.id) {
      getDetailActivity(params.id)
        .then((response) => {
          if (response.status == 200) {
            setIsLoading(false);
            setTitle(response.data.title);
            setItems(response.data.todo_items);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    detailActivity();
  }, []);

  return (
    <div data-cy="view-detail" className="mt-5">
      <div className="flex justify-between items-center">
        <div
          onMouseLeave={handleUpdateActivityDone}
          className="
            font-bold
            text-lg
            lg:text-xl
            flex
            gap-1
            items-center
          "
        >
          <Link to="/">
            <img src={IconArrowLeft} alt="Back" />
          </Link>
          {isActivityUpdate ? (
            <input
              type="text"
              value={title}
              className="
                      bg-transparent
                      border-gray-700
                      border-b-2
                      lg:w-80
                      focus:outline-none
                    "
              onChange={handleUpdateTitle}
            ></input>
          ) : (
            <div>{title}</div>
          )}

          <div
            onClick={() => setIsActivityUpdate(true)}
            className={`
                transform
                active:scale-100
                hover:scale-110
                cursor-pointer
                ${isLoading && 'hidden'}
              `}
          >
            <img src={IconPencil} alt="Edit" />
          </div>
        </div>
        <ButtonAdd onClick={() => setShowModalAdd(true)} />
      </div>
      <div className={`w-full h-72 flex justify-center items-center ${!isLoading && 'hidden'}`}>
        <Loader />
      </div>
      <div className={`w-full mt-10 ${isLoading && 'hidden'}`}>
        {items.length ? (
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <CardItem
                key={item.id}
                data={item}
                onChange={handleUpdateCardItem}
                onRemove={handleRemoveCardItem}
                onEdit={handleEditCardItem}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center mt-10">
            <img className="max-w-lg" src={ImageNewItem} alt="New Item" />
          </div>
        )}
      </div>
      {showModalAdd && (
        <ModalAddItem
          onClose={handleModalClose}
          onSave={handleModalSave}
          isLoading={isButtonLoading}
        />
      )}
      {showModalEdit && (
        <ModalUpdateItem
          item={item}
          onClose={handleModalEditClose}
          onSave={handleModalEditSave}
          isLoading={isButtonLoading}
        />
      )}
      {showAlert && (
        <AlertRemove
          type="item"
          name={item?.title}
          onCancel={handleCancelAlert}
          onRemove={handleRemoveAlert}
        />
      )}
      {showInfo && <AlertInfo onShow={handleShowInfo} msg="Item berhasil dihapus" />}
    </div>
  );
}

export default Detail;
