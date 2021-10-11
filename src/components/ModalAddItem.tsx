import IconClose from '../assets/close.svg'
import ButtonSave from './ButtonSave'

function ModalAddItem(props: any) {
  function handleClose() {
    props.onClose(false)
  }

  return (
    <div className="
      absolute
      top-1/4
      left-0
      w-full
      p-5
      z-10
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
            <input className="w-full border border-gray-200 p-2" type="text" placeholder="Tambahkan nama list item" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="uppercase font-bold text-xs">Priority</div>
            <select className="w-40 border border-gray-200 p-2">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="border-t-2 border-gray-200"/>
        <div className="px-5 py-3 flex justify-end">
          <ButtonSave />
        </div>
      </div>
    </div>
  )
}
  
export default ModalAddItem
    