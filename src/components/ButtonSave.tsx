function ButtonSave(props: { onClick: Function}) {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    props.onClick(event)
  }
  return (
    <button onClick={handleClick} className="
      bg-primary
      text-white
      rounded-3xl
      transform
      active:bg-primary-darken
      active:scale-100
      hover:scale-105
    ">
      <div className="
        px-4
        py-2
        flex
        gap-1
        items-center
      ">
        <div>Simpan</div>
      </div>
    </button>
  )
}

export default ButtonSave
    