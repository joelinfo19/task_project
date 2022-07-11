import {ItemThread} from "./ItemThread"

export const CategoryThread = () => {
  return (
    <div className="m-4">
      <p>Categoría</p>
      <div className="w-full border border-gray-200 rounded-xl">
        <ItemThread/>
        <ItemThread/>
        <ItemThread/>
      </div>
    </div>
  )
}
