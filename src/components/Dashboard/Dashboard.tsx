import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';

type Props = React.PropsWithChildren<{}>

export default function Dashboard({ children }: Props) {

  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  }

  const menus = [
    { link: "/", title: "Inicio", icon: "fa fa-home" },
    { link: "tareas", title: "Tareas", icon: "fas fa-address-card" },
    { link: "practicas", title: "Practicas", icon: "fas fa-project-diagram" },
    { link: "examenes", title: "Examenes", icon: "fas fa-blog" },
  ];


  return (
    <>
      <div className=' w-[100vw] h-[100vh] flex flex-row '>
        <nav className={`${`${open ? 'w-64 ' : 'w-0'}`}  bg-[#363740] h-full duration-300`} id='naavbaar' >
          {/* NAVBAR */}
          <img className=' w-28 mx-auto my-8' src="https://cdn-icons-png.flaticon.com/512/1534/1534938.png" alt="" />
          <ul className={`${open ? 'opacity-1' : 'opacity-0 pointer-events-none'}`}>
            {
              menus.map((e, i) => (
                <Link to={e.link} key={i}>
                  <li className='text-[#a1a1a5] block py-3 pl-3 md:pl-8  hover:bg-[#4a4a57] hover:text-white '>
                    <div className='flex items-center'>
                      <i className={`${e.icon} mr-3`}></i>
                      <span className='text-lg w-5'>{e.title}</span>
                    </div>
                  </li>
                </Link>
              ))
            }
          </ul>
          {/* END NAVBAR */}
        </nav>
        <div className='flex flex-col w-full overflow-x-auto'>
          <header className=' bg-[#f7f8fc] py-2 '>
            <div className='flex items-center justify-between mx-1 h-full md:mx-5'>
              <div className='flex items-center justify-center'>
                <button onClick={() => toggle()}>
                  <FiMenu className='text-3xl bg-[#b7b7ce] rounded p-1 ' />
                </button>
                <Link to={'/'}>
                  <span className=' mx-3 font-semibold text-lg sm:text-xl relative'>Tareas</span>
                </Link>
                <Link to={'/foro'}>
                  <span className='font-semibold text-lg sm:text-xl relative'>
                    Foro
                    <div className='w-2 h-2 absolute top-0 -right-2 rounded-full bg-[#f39e2f]'></div>
                  </span>
                </Link>
              </div>
              <div className='flex items-center'>
                <i className="fa-solid fa-bell text-xl mx-3 sm:text-2xl sm:mx-5"></i>
                <img className='w-9 h-9 rounded-full object-cover transform -scale-x-[1] sm:w-10 sm:h-10' src="https://www.rawstory.com/media-library/less-than-p-greater-than-a-virtual-avatar-of-facebook-ceo-mark-zuckerberg-less-than-p-greater-than.jpg?id=27823865" alt="" />
              </div>
            </div>
          </header>
          <main className='  w-full h-full '>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}


