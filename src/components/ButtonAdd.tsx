function ButtonAdd(props: { onClick: Function }) {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    props.onClick(event);
  }

  return (
    <button
      data-cy="activity-add-button"
      onClick={handleClick}
      className="
      bg-primary
      text-white
      rounded-3xl
      transform
      w-32
      active:bg-primary-darken
      active:scale-100
      hover:scale-105
      shadow-md
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
        <div className="text-xl">+</div>
        <div>Tambah</div>
      </div>
    </button>
  );
}

export default ButtonAdd;
