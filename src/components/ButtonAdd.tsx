function ButtonAdd() {
    return (
      <div className="
        bg-primary
        text-white
        rounded-3xl
        cursor-pointer
        hover:bg-primary-darken
        shadow-md
      ">
        <div className="
          px-3
          py-2
          flex
          gap-1
          items-center
        ">
          <div className="text-xl">+</div>
          <div>Tambah</div>
        </div>
      </div>
    )
  }
  
  export default ButtonAdd
    