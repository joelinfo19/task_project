import React from 'react'

export default function Filtros() {
  return (
    <>
      <div className=' grid grid-cols-1 gap-3 my-4 items-center sm:grid-cols-3 sm:gap-4 lg:gap-5'>
        <input className='bg-gray-50 border border-gray-300 outline-none p-1 rounded text-lg' type="search" placeholder='busqueda por nombre...' />
        <select className="bg-gray-50 border border-gray-300 text-md rounded-lg p-2 outline-none">
          <option>Elegir docente</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <select className="bg-gray-50 border border-gray-300 text-md rounded-lg p-2 outline-none">
          <option>Elegir curso</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </>
  )
}
