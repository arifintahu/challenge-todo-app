import IconAlert from '../assets/alert.svg'
import ButtonCancel from './ButtonCancel'
import ButtonRemove from './ButtonRemove'

function AlertActivity(props: any) {
  function handleCancel() {
    props.onCancel(false)
  }

  function handleRemove() {
    props.onRemove(true)
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
        max-w-md
      ">
        <div className="px-10 py-10 flex flex-col items-center">
          <div>
            <img src={IconAlert} alt="Alert" />
          </div>
          <div className="mb-10 text-center">
            Apakah anda yakin menghapus activity 
            <span className="font-bold"> "{props.name}"?</span>
          </div>
          <div className="flex gap-3">
            <div onClick={handleCancel}>
              <ButtonCancel />
            </div>
            <div onClick={handleRemove}>
              <ButtonRemove />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default AlertActivity
    