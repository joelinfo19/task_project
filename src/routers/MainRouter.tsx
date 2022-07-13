import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import Examenes from '../pages/Examenes'
import Inicio from '../pages/Inicio'
import Practicas from '../pages/Practicas'
import Tareas from '../pages/Tareas'

export default function MainRouter() {
  return (
    <Dashboard>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/tareas' element={<Tareas />} />
        <Route path='/practicas' element={<Practicas />} />
        <Route path='/examenes' element={<Examenes />} />
      </Routes>
    </Dashboard>
  )
}
