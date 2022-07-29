import {useNavigate} from "react-router-dom";
import {Thread} from "../../../types/ForumResponse"

type propType = {
  thread: Thread,
}

export const ItemThread = ( {thread}: propType ) => {

  const navigate = useNavigate()
  const user = thread.userId;

  const navigateTo = (idForum: string) => {
    navigate(`/foro/${idForum}`)
  }

  return (
    <div onClick={() => navigateTo(thread._id)} className="w-[85%] h-20 flex border-b border-gray-300 mx-4 my-2 rounded rounded-md hover:bg-slate-100 hover:cursor-pointer">
      <div className="m-2 flex justify-center items-center">
        {
          <img
            src={user.img}
            className="w-14 rounded rounded-full"
          />
        }
      </div>
      <div className="m-2 grid grid-rows-2 gap content-center items-center flex-1">
        <p className="font-bold">{thread.title}</p>
        <p>{thread.content}</p>
      </div>
      <DetailsItem/>
    </div>
  )
}

const DetailsItem = () => {
  return (
    <div className="m-2 w-20 text-end">
      Details
    </div>
  )
}
