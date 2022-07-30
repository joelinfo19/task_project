import React from 'react'
import { HiOutlineDownload } from 'react-icons/hi'

type CardProps = {
  task:any
}

export default function Card({ task }: CardProps) {

  const {_id,title,author,course,description,data,__v,type} = task


  const viewDoc = (data: any) => (
    window.open(data, '_blank')
  )

  const download = () => {
    alert("download")
  }

  return (
    <>
      <div className='flex justify-between bg-gray-300 rounded text-lg my-3 hover:bg-gray-500/50 cursor-pointer duration-100 group min-w-[300px]'>
        <div onClick={() => viewDoc(data)} className=' flex items-center w-full py-1 px-3'>
          <div className=' w-[70%]'>
            <p className='flex font-bold text-lg lowercase '>{title}</p>
            <p className='flex text-sm '>{author}</p>
            <p className='flex text-sm uppercase'>{course}</p>
          </div>
          { type==="Tarea" ? <p className=' text-sm text-white  bg-[#363740] rounded-full px-2.5'>Tarea</p> : <p></p> }
          { type==="Practica" ? <p className=' text-sm text-white  bg-[#5B7F70] rounded-full px-2.5'>Practica</p> : <p></p> }
          { type==="Examen" ? <p className=' text-sm text-white  bg-[#C4B047] rounded-full px-2.5'>Examen</p> : <p></p> }
          
        </div>
        <button onClick={() => download()} className=' flex flex-col justify-around items-center p-1 rounded '>
          <span className=' text-[0.8rem] w-24 font-mono '>4 days age</span>
          <HiOutlineDownload className=' text-2xl text-blue-900 group-hover:scale-150 transition duration-300' />
        </button>
      </div>
    </>
  )
}
