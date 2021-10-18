import { useState } from 'react';
import IconClose from '../assets/close.svg';
import ButtonSave from './ButtonSave';
import ButtonLoader from './ButtonLoader';
import DropdownPriority from './DropdownPriority';
import DropdownSimple from './DropdownSimple';

function ModalAddItem(props: any) {
  const [priority, setPriority] = useState<string>('very-high');
  const [title, setTitle] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  function handleClose() {
    props.onClose(false);
  }

  function handleSelect(val: string) {
    setPriority(val);
    setIsDisabled(!val || !title);
  }

  function handleTitle(e: any) {
    setTitle(e.target.value);
    setIsDisabled(!priority || !e.target.value);
  }

  function handleSave() {
    if (!!priority && !!title) {
      props.onSave({
        title: title,
        priority: priority
      });
    }
  }

  return (
    <div
      data-cy="modal-add"
      className="
      absolute
      top-0
      left-0
      w-screen
      h-screen
      p-5
      z-20
      bg-gray-700
      bg-opacity-25
    "
    >
      <div
        className="
        bg-white
        rounded-lg
        shadow-md
        m-auto
        max-w-xl
      "
      >
        <div className="flex justify-between px-5 py-3">
          <div data-cy="modal-add-title" className="font-bold">
            Tambah List Item
          </div>
          <div
            data-cy="modal-add-close-button"
            onClick={handleClose}
            className="
            transform
            active:scale-100
            hover:scale-110
            cursor-pointer
          "
          >
            <img src={IconClose} alt="Close" />
          </div>
        </div>
        <div className="border-t-2 border-gray-200" />
        <div className="p-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div data-cy="modal-add-name-title" className="uppercase font-bold text-xs">
              Nama List Item
            </div>
            <input
              data-cy="modal-add-name-input"
              className="w-full border border-gray-200 p-2"
              type="text"
              placeholder="Tambahkan nama list item"
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div data-cy="modal-add-priority-title" className="uppercase font-bold text-xs">
              Priority
            </div>
            {/* <DropdownPriority onChange={handleSelect} /> */}
            <DropdownSimple onChange={handleSelect} />
          </div>
        </div>
        <div className="border-t-2 border-gray-200" />
        <div data-cy="modal-add-save-button" className="px-5 py-3 flex justify-end">
          {props.isLoading ? (
            <ButtonLoader />
          ) : (
            <ButtonSave onClick={handleSave} disabled={isDisabled} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalAddItem;
