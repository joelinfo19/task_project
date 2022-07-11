import {CategoryThread} from "./components/CategoryThread"

export const ForumPage = () => {
  return (
    <div className="m-4 lg:container">
      <div className="flex">
        <p className="text-3xl m-4 h-10">El Bunker</p>
        <span className="flex-1"></span>
        <div className="text-xs m-2">Sort</div>
        <div className="text-xs m-2">Filter</div>
      </div>
      <CategoryThread/>
      <CategoryThread/>
      <CategoryThread/>
    </div>
  )
}
