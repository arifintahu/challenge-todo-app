function ButtonRemove(props: { onClick: Function }) {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    props.onClick(event);
  }
  return (
    <button
      data-cy="modal-delete-confirm-button"
      onClick={handleClick}
      className="
      bg-danger
      text-white
      rounded-3xl
      w-32
      transform
      active:scale-100
      hover:scale-105
    "
    >
      <div
        className="
        px-4
        py-2
        flex
        gap-1
        justify-center
        items-center
      "
      >
        <div>Hapus</div>
      </div>
    </button>
  );
}

export default ButtonRemove;
