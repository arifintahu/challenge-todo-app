import IconInfo from '../assets/info.svg';

function AlertInfo(props: any) {
  function handleClose() {
    props.onShow(false);
  }

  return (
    <div
      data-cy="modal-information"
      onClick={handleClose}
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
      flex
      items-center
    "
    >
      <div
        className="
        bg-white
        rounded-lg
        shadow-md
        m-auto
        max-w-lg
      "
      >
        <div className="px-5 py-5 flex gap-3">
          <div data-cy="modal-information-icon">
            <img src={IconInfo} alt="Info" />
          </div>
          <div data-cy="modal-information-title">{props.msg}</div>
        </div>
      </div>
    </div>
  );
}

export default AlertInfo;
