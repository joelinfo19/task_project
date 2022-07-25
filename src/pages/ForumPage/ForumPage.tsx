import {useEffect} from "react";
import Navbar from "../../components/Dashboard/Navbar"
import {useFetch} from "../../hooks/useFetch"
import {CategoryThread} from "./components/CategoryThread"

export const ForumPage = () => {

  const state = useFetch('https://task-js.herokuapp.com/api/forums');
  const {data, loading, error} = state;

  const forumsFor = (idForum: string) => {
    if(data != null){
      const { threads } = data
      return threads.filter( thread => thread.forumId == idForum );
    } else {
      return null
    }
  }

  return (
    <>
      <Navbar/>
      <div className="m-4 lg:container">
        <div className="flex">
          <p className="text-3xl m-4 h-10">El Bunker</p>
          <span className="flex-1"></span>
          <div className="text-xs m-2">Sort</div>
          <div className="text-xs m-2">Filter</div>
        </div>
        {
          loading 
            ? <p>Cargando...</p>
            : data!.forums.map(forum => <CategoryThread category={forum.title} threads={forumsFor(forum._id)}/>)
        }
      </div>
    </>
  )
}
