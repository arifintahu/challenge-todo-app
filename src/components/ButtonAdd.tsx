function ButtonAdd(props: { onClick: Function }) {
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    props.onClick(event)
  }

  return (
    <button
      data-cy="button-add"
      onClick={handleClick} 
      className="
      bg-primary
      text-white
      rounded-3xl
      transform
      w-24
      active:bg-primary-darken
      active:scale-100
      hover:scale-105
      shadow-md
    ">
      <div className="
        px-4
        py-2
        flex
        gap-1
        justify-center
        items-center
      ">
        <div className="text-xl">+</div>
        <div>Tambah</div>
      </div>
    </button>
  )
}
  
  export default ButtonAdd
    