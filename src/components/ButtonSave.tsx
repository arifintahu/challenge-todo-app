import { useState } from "react"

function ButtonSave(props: { onClick: Function, disabled: boolean}) {
  const { disabled } = props
  
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    props.onClick(event)
  }
  return (
    <button 
      onClick={handleClick}
      disabled={props.disabled}
      className={
        `
          bg-primary
          text-white
          rounded-3xl
          transform
          ${!disabled && 'active:bg-primary-darken active:scale-100 hover:scale-105' }
          ${disabled && 'cursor-default opacity-30' }
        `
      }
      >
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
    