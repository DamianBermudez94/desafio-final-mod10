import React from 'react'
import styles from './BurguerButton.module.css'
// vamos a agregar algunas reglas específicas acá

function BurguerButton({ handleClick, clicked }) {
  return (
    <div className="w-[35px] h-[30px] relative flex cursor-pointer" onClick={handleClick}>
      <div className={`icon ${styles.navIcon5} ${clicked ? styles.open : ''}`}>
        <span className="burguer-line"></span>
        <span className="burguer-line"></span>
        <span className="burguer-line"></span>
      </div>
    </div>
  )
}

export default BurguerButton
