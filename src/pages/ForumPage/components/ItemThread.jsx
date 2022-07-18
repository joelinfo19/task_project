

export const ItemThread = () => {
  return (
    <div className="w-[85%] h-20 flex border-b border-gray-300 mx-4">
      <div className="m-2 flex justify-center items-center">
        icon
      </div>
      <div className="m-2 grid grid-rows-2 gap content-center items-center flex-1">
        <p className="font-bold">Título</p>
        <p>Descripción del post</p>
      </div>
      <DetailsItem/>
    </div>
  )
}

const DetailsItem = () => {
  return (
    <div className="m-2">
      Details
    </div>
  )
}
