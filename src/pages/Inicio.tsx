import React, { useEffect, useState } from 'react'
import Card from '../components/Repositorio/Card'
import Filtros from '../components/Repositorio/Filtros'

import axios from 'axios';

export default function Inicio() {

  const [task, setTask] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search,setSearch]=useState("")

  useEffect(() => {
    axios.get(`https://task-js.herokuapp.com/api/tasks`)
      .then(res => {
        const tareas = res.data;
        setTask(tareas.tasks)
      })
      .catch(error => {
        setError(true)
      })
      .finally(() => setLoading(false));
  }, [])

  // console.log(task)
  const Loading = () => (
      <h1>ALDACO COMUNISTA ODIA BOOTSTRAP</h1>
  )


  return (
    <>
      <div className='mx-[5%]'>
        <Filtros />
        <h1 className='text-2xl font-bold mb-3'>Lo último agregado</h1>
        {error && <p className='alert alert-danger'><b className='mr-2'>Fuck!</b>Error server not found</p>}
        {loading && <Loading />}
        {/* {
          task.map((e, i) => {
            return <Card key={i} titulo={e.title} docente={e.author} data={e.data} />
          })
        } */}



        {task.filter((val: any) => {
          if (search === "" || val.course.toLowerCase().includes(search.toLowerCase()) || val.author.toLowerCase().includes(search.toLowerCase())) {
            return val
          }
          return false
        }).reverse().map((e,i) => (
          <Card key={i} titulo={e.title} docente={e.author} data={e.data} />
        ))
        }
      </div>
    </>
  )
}
