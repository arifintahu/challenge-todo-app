function ButtonAdd() {
    return (
      <button className="
        bg-primary
        text-white
        rounded-3xl
        transform
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
          items-center
        ">
          <div className="text-xl">+</div>
          <div>Tambah</div>
        </div>
      </button>
    )
  }
  
  export default ButtonAdd
    