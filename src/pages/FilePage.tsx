import React, {useRef, useState} from "react";
// import {Navbar} from "../components/Navbar";
const url='http://localhost:3000/api/tasks'
export const FilePage=()=>{
    // const { courseId } = useParams()

    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('default')
    const [urlPdf, setUrlPdf] = useState('default')
    const [user, setUser] = useState({
        title:"test",
        author:"sss",
        course:"sss",
        description:"ssss"

    })
    const form = useRef(null)
    const handleInputChange=(e:any)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const onChange = (e:any) => {

        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }
    const onSubmit = (e:any) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title',user.title)
        formData.append('author',user.author)
        formData.append('course',user.course)
        formData.append('description',user.description)
        formData.append('myFile', file)
        formData.append('myFile', filename)

        console.log(file)
        console.log(filename)
        // formData.append('myFile', text)
        // formData.append('myFile', filename)


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
            .then(data => console.log(data))


        //     .catch(error => console.log("msg: ", error))
    }

    //
    //
    //
    // const getPdf = () => {
    //     fetch('https://testunsaac.herokuapp.com/api/matriculas', {
    //         method: 'GET'
    //
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             const { matriculas } = data
    //             matriculas.map(matricula => {
    //                 if (matricula._id == idMatricula) {
    //                     setUrlPdf(matricula.silabus)
    //                     // console.log(matricula._id)
    //
    //                 }
    //             })
    //             console.log(urlPdf)
    //         })
    //
    //     fetch(url + urlPdf, {
    //         method: 'GET',
    //         responseType: 'blob'
    //     })
    //         .then(res => {
    //             console.log(res)
    //             window.open(res.url)
    //         })
    // }
    //



    return(
        // <div>
        //     <form onSubmit={onSubmit}>
        //         <h2>Curso id: {courseId}</h2>
        //         <input type="file" name="file" onChange={(e) => onChange(e)}></input>
        //         <button type="submit">Guardar</button>
        //     </form>
        //
        //     <button onClick={getPdf} >Ver pdf</button>
        //
        // </div>
        <div className="border d-flex  justify-content-center">
            {/*<div className="align-content-center">*/}

                <form onSubmit={onSubmit}>
                    <input type="file" name="file" onChange={(e) => onChange(e)}></input>
                    <input type="text" name="title" value={user.title} defaultValue={user.title} onChange={handleInputChange} />
                    <input type="text" name="author" value={user.author} defaultValue={user.title} onChange={handleInputChange}/>
                    <input type="text" name="course" value={user.course} defaultValue={user.title} onChange={handleInputChange}/>
                    <input type="text" name="description" value={user.description} defaultValue={user.title} onChange={handleInputChange}/>


                    {/*<input type="text" name="user[author]" defaultValue={user.author} />*/}

                    <div>
                        <button type="submit"className="btn btn-primary">
                            save
                        </button>
                    </div>
                </form>
            {/*</div>*/}


        </div>
    )



}
