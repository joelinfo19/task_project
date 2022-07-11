import {CategoryThread} from "./components/CategoryThread"

export const ForumPage = () => {
  return (
    <div className="bg-slate-200 m-4 container">
      <div className="flex">
        <p className="text-3xl my-4 mx-2 h-10">El Bunker</p>
        <span className="flex-1"></span>
        <div className="text-xs m-2">Sort</div>
        <div className="text-xs m-2">Filter</div>
      </div>
      <CategoryThread/>
      <CategoryThread/>
    </div>
  )
}
