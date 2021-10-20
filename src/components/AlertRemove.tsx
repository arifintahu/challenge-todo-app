import IconAlert from '../assets/alert.svg';
import ButtonCancel from './ButtonCancel';
import ButtonRemove from './ButtonRemove';
import { useState } from 'react';

function AlertRemove(props: any) {
  const [node, setNode] = useState<any>(null);

  function handleCancel() {
    props.onCancel(false);
  }

  function handleRemove() {
    props.onRemove(true);
  }

  function handleOutsideClick(e: any) {
    if (!node.contains(e.target)) {
      props.onCancel(false);
    }
  }

  return (
    <div
      onClick={handleOutsideClick}
      data-cy="modal-delete"
      className="
      absolute
      top-0
      left-0
      p-5
      w-screen
      h-screen
      z-20
      bg-gray-700
      bg-opacity-25
      flex
      items-center
    "
    >
      <div
        ref={(node) => {
          setNode(node);
        }}
        className="
        bg-white
        rounded-lg
        shadow-md
        m-auto
        max-w-md
      "
      >
        <div className="px-10 py-10 flex flex-col items-center">
          <div data-cy="modal-delete-icon">
            <img src={IconAlert} alt="Alert" />
          </div>
          <div data-cy="modal-delete-title" className="mb-10 text-center">
            Apakah anda yakin menghapus {props.type}
            <span className="font-bold"> "{props.name}"?</span>
          </div>
          <div className="flex gap-3">
            <ButtonCancel onClick={handleCancel} />
            <ButtonRemove onClick={handleRemove} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertRemove;
