import {Thread} from "../../../types/ForumResponse"
import {ItemThread} from "./ItemThread"

type propType = {
  category: string,
  threads: Thread[] | null,
}

export const CategoryThread = ({category, threads}:propType) => {
  return (
    <div className="m-4">
      <p>{ category }</p>
      <div className="w-full border border-gray-200 rounded-xl">
        {
          threads != null &&
            threads.map( thread => <ItemThread thread={thread}/> )
        }
      </div>
    </div>
  )
}
