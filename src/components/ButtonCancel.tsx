function ButtonCancel(props: { onClick: Function }) {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    props.onClick(event);
  }
  return (
    <button
      data-cy="modal-delete-cancel-button"
      onClick={handleClick}
      className="
      bg-background
      text-title
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
        <div>Batal</div>
      </div>
    </button>
  );
}

export default ButtonCancel;
