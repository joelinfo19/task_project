import axios from 'axios'
import React, { useEffect, useState } from 'react'

type FilterProps = {
  cambiarBusq: any,
  cambiarDoc: any,
  cambiarCurs: any
}

export default function Filtros({ cambiarBusq, cambiarDoc, cambiarCurs }: FilterProps) {
  const [doc, setDoc] = useState<any[]>([])
  const [cur, setCur] = useState<any[]>([])

  useEffect(() => {
    axios.get(`https://task-js.herokuapp.com/api/professors`)
      .then(res => {
        const docentes = res.data;
        setDoc(docentes.professors)
      })
      .catch(error => {
        console.log(error)
      })

    axios.get(`https://task-js.herokuapp.com/api/courses`)
      .then(res => {
        const cursos = res.data;
        setCur(cursos.courses)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const a: any = []
  doc.map((e, i) => {
    a.push(e.name + " " + e.lastName)
    return a
  })
  const docsort = a.sort()

  // -- */
  const b: any = []
  cur.map((e, i) => {
    b.push(e.name)
    return b
  })
  const cursort = b.sort()


  return (
    <>
      {
        <div className=' grid grid-cols-1 gap-3 my-4 items-center sm:grid-cols-3 sm:gap-4 lg:gap-5'>
          <input onChange={(e) => { cambiarBusq(e.target.value) }}
            className='bg-gray-50 border border-gray-300 outline-none p-1 rounded text-lg' type="search" placeholder='busqueda por nombre...' />
          <select onChange={(e) => { cambiarDoc(e.target.value) }} className="bg-gray-50 border border-gray-300 text-md rounded-lg p-2 outline-none">
            {/* <option>Elegir docente</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option> */}
            <option value=''>Elegir docente</option>
            {
              docsort.map((e: any, i: any) => (
                <option key={i} value={e}>{e}</option>
              ))
            }
          </select>
          <select onChange={(e) => { cambiarCurs(e.target.value) }} className="bg-gray-50 border border-gray-300 text-md rounded-lg p-2 outline-none">
            <option value=''>Elegir curso</option>
            {
              cursort.map((e: any, i: any) => (
                <option key={i} value={e}>{e}</option>
              ))
            }
          </select>
        </div>
      }
    </>
  )
}
