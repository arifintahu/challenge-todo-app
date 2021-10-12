import IconTrash from '../assets/trash.svg'
import IconPencil from '../assets/pencil.svg'

function CardItem() {
  return (
    <div className="
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
          <input className="transform scale-150" type="checkbox" value="Bike" />
        </div>
        <div>
          <div className="bg-black rounded-full w-3 h-3"></div>
        </div>
        <div>Telur ayam</div>
        <div className="
          transform
          active:scale-100
          hover:scale-110
          cursor-pointer
        ">
          <img src={IconPencil} alt="Edit" />
        </div>
      </div>
      <div className="
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
    