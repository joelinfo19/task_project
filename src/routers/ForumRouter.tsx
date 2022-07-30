
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Dashboard/Navbar';
import { ForumPage } from "../pages/ForumPage/ForumPage";
import { ListForum } from '../pages/ForumPage/ListForum';
import { ThreadPage } from '../pages/ForumPage/ThreadPage';

export default function ForumRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ForumPage />} >
          <Route index element={<ListForum />} />
          <Route path=':idForum' element={<ThreadPage />} />
        </Route>
      </Routes>
    </>
  )
}
