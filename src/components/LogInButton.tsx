import React from 'react';
import sty from './styles/LogInButton.module.css';

export const LogInButton = () => {
  return(
    <button className={sty.button_container}>
      <div className={sty.text}>Iniciar Sesión</div>
    </button>
  )
}
