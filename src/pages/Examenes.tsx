import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Alert from '../components/Repositorio/Alert'
import Boton from '../components/Repositorio/Boton'
import Card from '../components/Repositorio/Card'
import Filtros from '../components/Repositorio/Filtros'

export default function Examenes() {

  const [examenes, setExamenes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState("")
  const [sdoc, setSdoc] = useState("")
  const [scurso, setScurso] = useState("")

  function isPractica(array:any,type:any) {
    return (array.type === "Examen");
  }

  useEffect(() => {
    axios.get(`https://task-js.herokuapp.com/api/tasks`)
      .then(res => {
        const tareas = res.data;
        setExamenes(tareas.tasks.filter(isPractica))
      })
      .catch(error => {
        setError(true)
      })
      .finally(() => setLoading(false));
  }, [])


  // console.log(task)
  const Loading = () => (
    <div className="inline-block w-10 h-10 
           border-4
            border-r-[#007bff]
            rounded-full 
            animate-spin">
    </div>
  )
  // console.log(sdoc.toLowerCase())


  return (
    <>
      <div className='mx-[5%]'>
        <Boton texto='Subir nuevo examen' />
        <Filtros cambiarBusq={setSearch} cambiarDoc={setSdoc} cambiarCurs={setScurso} />
        <h1 className='text-2xl font-bold mb-3'>Exámenes recientes</h1>
        {/* {error && <p className='alert alert-danger'><b className='mr-2'>Fuck!</b>Error server not found</p>} */}
        {error && <Alert />}
        {loading && <Loading />}

        {examenes.filter((val: any) => {
          if (val.author.toLowerCase().includes(sdoc.toLowerCase()) && (val.course.toLowerCase().includes(scurso.toLowerCase()) && (search === "" || val.title.toLowerCase().includes(search.toLowerCase())))) {
            return val
          }
          return false
        }).reverse().map((e, i) => (
          <Card key={i} task={e} />
        ))
        }
      </div>
    </>
  )
}

