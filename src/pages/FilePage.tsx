import React, {useEffect, useState} from "react";
import Swal from 'sweetalert2'
const url='https://task-js.herokuapp.com/api/upload'
const url2='https://task-js.herokuapp.com/api/tasks'

export const FilePage=()=>{

    const [urlPdf, setUrlPdf] = useState('default')
    const [search,setSearch]=useState("")
    const [user, setUser] = useState({
        title:"",
        author:"",
        course:"",
        description:"",
        data:""

    })
    const [flag,setFlag]=useState(true)
    const createUser =  (e:any) => {
        e.preventDefault()
        const userReal={
            ...user,
        }
        userReal.data=urlPdf

        fetch(url2 , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userReal)

        })
            .then(response => response.json())
            .then(data =>{
                getPdf()
                console.log(data)
            })

        console.log('this is the url'+urlPdf)

        //     .catch(error => console.log("msg: ", error))
    }
    const [task,setTask]=useState([])



    // const form = useRef(null)
    const handleInputChange=(e:any)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = (file:any) => {
        const formData = new FormData()
        // formData.append('title',user.title)
        // formData.append('author',user.author)
        // formData.append('course',user.course)
        // formData.append('description',user.description)
        formData.append('myFile', file)

        console.log(file)

        console.log(formData)
        // const data={
        //     title:"test",
        //     author:"test",
        //     course:"test",
        //     description:"test",
        //     data:formData
        // }
        // console.log(data)
        fetch(url , {
            method: 'POST',
            body: formData

        })
            .then(response => response.json())
            .then(data => {

                setUrlPdf(data.urlView)
                if(data.urlView===""||data.urlView===null){
                    setFlag(true)
                }
                console.log(data.urlView)
                setFlag(false)
            })


        //     .catch(error => console.log("msg: ", error))
    }




    const getPdf = async () => {
        await fetch(url2, {
            method: 'GET'

        })
            .then(res => res.json())
            .then(data => {
                setTask(data.tasks)
                // console.log(data)
            })
        // console.log(task)

    }
    useEffect(()=>{
        getPdf()
       // fetch(url2, {
       //          method: 'GET'
       //
       //      })
       //          .then(res => res.json())
       //          .then(data => {
       //              setTask(data)
       //              console.log(data)
       //          })
    },[])




    return(
        <>

        {/*// <div>*/}
        {/*//     <form onSubmit={onSubmit}>*/}
        {/*//         <h2>Curso id: {courseId}</h2>*/}
        {/*//         <input type="file" name="file" onChange={(e) => onChange(e)}></input>*/}
        {/*//         <button type="submit">Guardar</button>*/}
        {/*//     </form>*/}
        {/*//*/}
        {/*//     <button onClick={getPdf} >Ver pdf</button>*/}
        {/*//*/}
        {/*// </div>*/}
        <div className="container border mt-3 ">
            {/*<div className="align-content-center">*/}
                <h1 className="text-center">UPLOAD ASSIGNMENTS AND EXAMS</h1>
                <div className="d-flex  justify-content-center">

                    <form onSubmit={createUser}>

                        <div className="form-group row">
                            <label >Title </label>
                            <input type="text" name="title" value={user.title}  onChange={handleInputChange} />
                        </div>
                        <div className="form-group row">
                            <label >Professor</label>
                            <input type="text" name="author" value={user.author} onChange={handleInputChange}/>
                        </div>
                        <div className="form-group row">
                            <label >Name of the course</label>
                            <input type="text" name="course" value={user.course}  onChange={handleInputChange}/>
                        </div>
                        <div className="form-group row">
                            <label >Description</label>
                            <textarea  name="description" value={user.description}  onChange={handleInputChange}></textarea>
                        </div>
                        <div className="form-group row  mt-3 border">
                            <label >Upload task please *</label>
                            <input type="file" name="file" required onChange={(e) => onSubmit(e.target.files![0])}></input>
                        </div>
                        <div className="mt-3">
                            <button type="submit" disabled={flag} className="btn btn-primary">
                                save
                            </button>
                        </div>

                    </form>

                </div>


            {/*</div>*/}
            <hr/>
            <div >
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search for course or professor..."
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }}
                />
                { task.filter((val:any) => {
                    if (search === "" ||val.course.toLowerCase().includes(search.toLowerCase())||val.author.toLowerCase().includes(search.toLowerCase())) {
                        return val
                    }
                     return false
                }).map((data:any)=>(
                        <div className="card mt-3"  key={data._id}>
                            <div className="card-header">
                                {data.title}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{data.course} - {data.author}</h5>
                                <p className="card-text">{data.description}</p>
                                <a href={data.data} className="btn btn-primary">GO TO TASK</a>
                            </div>
                            {/*<a key={data._id} href={data.data} className="">{data.title}</a>*/}
                        </div>
                    ))
                }
            </div>


        </div>


        {/*<div className="card">*/}
        {/*    <div className="card-body">*/}
        {/*        <a href="#" className="btn btn-primary">Go somewhere</a>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </>
    )



}
