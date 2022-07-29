import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {LoginPage} from '../pages/LoginPage'
import ForumRouter from './ForumRouter'
import MainRouter from './MainRouter'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/foro/*' element={<ForumRouter />} />
        <Route path='/*' element={<MainRouter />} />

        {/* <Route path='*' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
