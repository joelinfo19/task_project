import React, {useEffect, useState} from 'react'
import Filtros from "../components/Repositorio/Filtros";
import {FilePage} from "./FilePage";
import axios from "axios";
import Card from "../components/Repositorio/Card";
import Alert from "../components/Repositorio/Alert";

const taskUrl="https://task-js.herokuapp.com/api/tasks"
export default function Tareas() {
    // const type='Tarea'
    // const type2=['Tarea','Examen','Practica']
    const [tasks,setTasks]=useState<any[]>([])
    // const [practicas, setPracticas] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [search, setSearch] = useState("")
    const [sdoc, setSdoc] = useState("")
    const [scurso, setScurso] = useState("")
    function isTask(array:any) {
        return (array.type === "Tarea");
    }
    useEffect(() => {
        axios.get(taskUrl)
            .then(res => {
                const tareas = res.data;
                setTasks(tareas.tasks.filter(isTask))
            })
            .catch(error => {
                setError(true)
            })
            .finally(() => setLoading(false));
    }, [])
    // useEffect(()=>{
    //   axios.get(taskUrl).then(res=>{
    //           // console.log(res.data.tasks)
    //           setTask(res.data.tasks)
    //
    //       }
    //   )
    // },[task])

    const Loading = () => (
        <div className="inline-block w-10 h-10
           border-4
            border-r-[#007bff]
            rounded-full
            animate-spin">
        </div>
    )

  return (
    <div>
        <div className='mx-[5%]'>
            <Filtros cambiarBusq={setSearch} cambiarDoc={setSdoc} cambiarCurs={setScurso} />
            <h1 className='text-2xl font-bold mb-3'>Lo último agregado</h1>
            {/* {error && <p className='alert alert-danger'><b className='mr-2'>Fuck!</b>Error server not found</p>} */}
            {error && <Alert />}
            {loading && <Loading />}

            {tasks.filter((val: any) => {
                if (val.author.toLowerCase().includes(sdoc.toLowerCase()) && (val.course.toLowerCase().includes(scurso.toLowerCase()) && (search === "" || val.title.toLowerCase().includes(search.toLowerCase())))) {
                    return val
                }
                return false
            }).reverse().map((e, i) => (
                <Card key={i} titulo={e.title} docente={e.author} data={e.data} />
            ))
            }
        </div>
        {/*<div className="bg-[#f7f8fc]">*/}
        {/*    <div className="mx-[5%] " >*/}
        {/*        <button className="mt-4 border px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-800">*/}
        {/*            Subir nuevo trabajo*/}
        {/*        </button>*/}
        {/*        /!*<Filtros/>*!/*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<div className="mx-[5%] ">*/}

        {/*    {*/}
        {/*        task.filter((task:any)=>{*/}
        {/*            if(task.type===type)*/}
        {/*                return(task)*/}
        {/*            else{*/}
        {/*              return false*/}
        {/*            }*/}
        {/*            }*/}
        {/*        ).map((data:any)=>(<div key={data._id} className='flex justify-between bg-gray-300 rounded text-lg my-3 hover:bg-gray-500/50 cursor-pointer duration-100'>*/}

        {/*            <div className={'flex items-center w-full py-1 px-3'}>*/}
        {/*                <div className=" w-[70%]">*/}
        {/*                    <div>*/}
        {/*                        titulo*/}
        {/*                    </div>*/}
        {/*                    <div>{data.author}</div>*/}
        {/*                </div>*/}
        {/*                <div>{data.type}</div>*/}
        {/*            </div>*/}

        {/*            <div className={"flex items-center p-1"}>descargar</div>*/}

        {/*        </div>))*/}
        {/*    }*/}


        {/*</div>*/}



    </div>
  )
}
