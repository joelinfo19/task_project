import React, {useEffect, useState} from 'react'
import Filtros from "../components/Repositorio/Filtros";
import {FilePage} from "./FilePage";
import axios from "axios";

const taskUrl="https://task-js.herokuapp.com/api/tasks"
export default function Tareas() {
    const type='Tarea'
    const type2=['Tarea','Examen','Practica']
    const [task,setTask]=useState([])
    useEffect(()=>{
      axios.get(taskUrl).then(res=>{
              // console.log(res.data.tasks)
              setTask(res.data.tasks)

          }
      )
    },[task])



  return (
    <div>
        <div className="bg-[#f7f8fc]">
            <div className="mx-[5%] " >
                <button className="mt-4 border px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-800">
                    Subir nuevo trabajo
                </button>
                <Filtros/>
            </div>
        </div>
        <div className="mx-[5%] ">
            {/*<div className='flex justify-between bg-gray-300 rounded text-lg my-3 hover:bg-gray-500/50 cursor-pointer duration-100'>*/}

            {/*    <div className={'flex items-center w-full py-1 px-3'}>*/}
            {/*        <div className=" w-[70%]">*/}
            {/*            <div>*/}
            {/*                titulo*/}
            {/*            </div>*/}
            {/*            <div>docente</div>*/}
            {/*        </div>*/}
            {/*        <div>tarea</div>*/}
            {/*    </div>*/}

            {/*    <div className={"flex items-center p-1"}>descargar</div>*/}

            {/*</div>*/}
            {
                task.filter((task:any)=>{
                    if(task.type===type)
                        return(task)
                    else{
                      return false
                    }
                    }
                ).map((data:any)=>(<div key={data._id} className='flex justify-between bg-gray-300 rounded text-lg my-3 hover:bg-gray-500/50 cursor-pointer duration-100'>

                    <div className={'flex items-center w-full py-1 px-3'}>
                        <div className=" w-[70%]">
                            <div>
                                titulo
                            </div>
                            <div>{data.author}</div>
                        </div>
                        <div>{data.type}</div>
                    </div>

                    <div className={"flex items-center p-1"}>descargar</div>

                </div>))
            }


        </div>



    </div>
  )
}
