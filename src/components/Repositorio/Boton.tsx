import React from 'react'

export default function Boton({ texto} : any) {
  return (
    <button className='mt-8' onClick={()=> alert('click')}>
      <span className=' bg-[#363740] text-white rounded px-5 py-2'>{texto}</span>
    </button>
  )
}
