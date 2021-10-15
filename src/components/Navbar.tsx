function Navbar() {
  return (
    <div
      data-cy="header-background"
      className="
        w-full
        py-5
        bg-primary
        absolute
        sticky
        top-0
        shadow-md
        z-10
      "
    >
      <div
        data-cy="header-title"
        className="
          px-5
          w-full
          md:max-w-2xl
          lg:max-w-5xl
          mx-auto
          font-bold
          text-white
          lg:text-lg
        "
      >
        TO DO LIST APP
      </div>
    </div>
  );
}

export default Navbar;
