import React from 'react'
// vamos a agregar algunas reglas específicas acá

function BurguerButton({ handleClick, clicked }) {
  return (
    <div
      className="w-[35px] h-[30px] flex flex-col justify-between cursor-pointer group md:hidden"
      onClick={handleClick}
    >
      <span
        className={`h-[4px] w-full bg-white rounded transition-all duration-300
      ${clicked ? 'rotate-45 translate-y-[13px]' : 'group-hover:-rotate-[3deg] group-hover:scale-y-110'}
    `}
      />
      <span
        className={`h-[4px] w-full bg-white rounded transition-all duration-300
      ${clicked ? 'opacity-0' : 'group-hover:rotate-[3deg] group-hover:scale-y-110'}
    `}
      />
      <span
        className={`h-[4px] w-full bg-white rounded transition-all duration-300
      ${clicked ? '-rotate-45 -translate-y-[13px]' : 'group-hover:-rotate-[4deg] group-hover:scale-y-110'}
    `}
      />
    </div>

  )
}

export default BurguerButton
