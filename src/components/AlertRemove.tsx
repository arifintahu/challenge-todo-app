import IconAlert from '../assets/alert.svg'
import ButtonCancel from './ButtonCancel'
import ButtonRemove from './ButtonRemove'

function AlertRemove(props: any) {
  function handleCancel() {
    props.onCancel(false)
  }

  function handleRemove() {
    props.onRemove(true)
  }

  return (
    <div className="
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
    ">
      <div className="
        bg-white
        rounded-lg
        shadow-md
        m-auto
        max-w-md
      ">
        <div className="px-10 py-10 flex flex-col items-center">
          <div>
            <img src={IconAlert} alt="Alert" />
          </div>
          <div className="mb-10 text-center">
            Apakah anda yakin menghapus {props.type}
            <span className="font-bold"> "{props.name}"?</span>
          </div>
          <div className="flex gap-3">
            <ButtonCancel onClick={handleCancel}/>
            <ButtonRemove onClick={handleRemove}/>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default AlertRemove
    