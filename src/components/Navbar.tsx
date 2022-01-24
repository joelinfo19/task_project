import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {LogInButton} from "./LogInButton";
import sty from './styles/Navbar.module.css';

export const Navbar=()=>{
  return(
    <div className={sty.navbar}>
      <div className={sty.navbar_courses}>
        <button className={sty.navbar_courses_button}>Cursos</button>
      </div>
      <div className={sty.navbar_profile}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LogInButton/>}></Route>
            <Route path='/user' element={<p>profile</p>}></Route>
            <Route path='*' element={<p>Iniciar sesión</p>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )

}
