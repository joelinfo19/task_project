import React from 'react'
import { FcDownload } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

type CardProps = {
  titulo: string,
  docente: string,
  data: string
}

export default function Card({ titulo, docente, data }: CardProps) {


  const viewDoc = (data: any) => (
    window.open(data, '_blank')
  )

  const download = () => {
    alert("download")
  }

  return (
    <>
      <div className='flex justify-between bg-gray-300 rounded text-lg my-3 hover:bg-gray-500/50 cursor-pointer duration-100'>
        <div onClick={() => viewDoc(data)} className=' flex items-center w-full py-1 px-3'>
          <div className=' w-[70%]'>
            <p className=' font-bold text-lg lowercase '>{titulo}</p>
            <p className='text-sm'>{docente}</p>
          </div>
          <p className=' text-sm text-white  bg-[#5b7f70] rounded-full px-2.5'>Tarea</p>
        </div>
        <button onClick={() => download()} className=' flex flex-col justify-around items-center p-1 rounded  border-gray-300 bg-[#ddd] hover:bg-[#bbb]'>
          <span className=' text-[0.8rem]  w-24'>4 days age</span>
          <FcDownload />
        </button>
      </div>
    </>
  )
}
