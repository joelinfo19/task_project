import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Foro from '../pages/Foro'
import {LoginPage} from '../pages/LoginPage'
import MainRouter from './MainRouter'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/foro' element={<Foro />} />
        <Route path='/*' element={<MainRouter />} />

        {/* <Route path='*' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
