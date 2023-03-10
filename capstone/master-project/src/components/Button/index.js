import React from 'react';
import styes from "./Button.module.css"

const Button = ({children,...properties}) => {
  return (
    <button {...properties} className={styes.button}>
      {children}
    </button>
  )
}

export default Button
