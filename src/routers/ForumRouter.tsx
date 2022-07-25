
import {Routes, Route} from 'react-router-dom'
import {ForumPage} from "../pages/ForumPage/ForumPage";

export default function ForumRouter() {
  return (
    <Routes>
      <Route path='/:idForum' element={<p> fiu fiu </p>} />
      <Route path='/' element={<ForumPage />} />
    </Routes>
  )
}
