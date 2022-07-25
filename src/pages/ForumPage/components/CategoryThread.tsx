import {ItemThread} from "./ItemThread"

type propType = {
  category: string,
}

export const CategoryThread = ({category}:propType) => {
  return (
    <div className="m-4">
      <p>{ category }</p>
      <div className="w-full border border-gray-200 rounded-xl">
        <ItemThread/>
        <ItemThread/>
        <ItemThread/>
      </div>
    </div>
  )
}
