import { useEffect, useState } from 'react'
import Navbar from '../../components/Dashboard/Navbar'


const threadId = '62c603967aab484dbc31899c'
const currentUserId = '62d732b745549280163e194c'

export const ThreadPage = () => {
  const [thread, setThread] = useState()
  const [posts, setPosts] = useState([])
  const [newComment, setNewComment] = useState()

  const rootPosts = posts.filter(post => post.parent === undefined)

  // const getAnswers = (idParent) => {
  //   return posts.filter(post => (
  //     post.parent === idParent
  //   ))
  // }
  const sendComment = () => {
    fetch('https://task-js.herokuapp.com/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        threadId: threadId,
        userId: currentUserId,
        content: newComment,
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  useEffect(() => {
    fetch(`https://task-js.herokuapp.com/api/threads/${threadId}`)
      .then(res => res.json())
      .then(data => {
        setThread(data.thread)
        setPosts(data.posts)
      })
  }, [])
  console.log({ posts })
  return (
    <>
      <Navbar />
      <div className='bg-white m-12'>
        <div>
          {
            thread ?
              <CommentCard url={thread.userId.img} username={thread.userId.name} title={thread.title} content={thread.content} />
              : null
          }
        </div>
        <div className='mb-10 mt-10'>
          <h3 className='font-bold'>Comenta</h3>
          <textarea
            className='border rounded w-full h-16 p-2'
            placeholder='Escribe tu comentario...'
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className='bg-orange-300 rounded p-2 hover:bg-orange-400'
            onClick={() => sendComment()}
          >
            Comentar
          </button>
        </div>

        <div>
          <h3 className='font-bold' >Discusión</h3>
          {
            (rootPosts) && rootPosts.map(post => {
              return <CommentCard
                key={post._id}
                postId={post._id}
                userId={post.userId._id}
                url={post.userId.img}
                username={post.userId.name}
                content={post.content}
                posts={posts}
                level={true}
              />
            })
          }
        </div>
      </div>
    </>
  )
}


const CommentCard = ({ postId, userId, url, username, content, title, posts, level }) => {
  const [showInput, setShowInput] = useState(false)
  const [valueComment, setValueComment] = useState('')

  const sendComment = () => {
    fetch('https://task-js.herokuapp.com/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        threadId: threadId,
        userId: currentUserId,
        content: valueComment,
        parent: postId
      })
    })
      .then(res => res.json())
      .then(data => alert('Tu respuesta ha sido registrado...', data))
  }

  return (
    <>
      {
        title
          ? <h2 className='text-2xl' >{title}</h2>
          : null
      }
      <div className='flex border-t border-b m-2 p-2 '>
        <div className='flex-col w-16 pr-4 border-r  '>
          <img
            className='w-full rounded-full'
            src={url} />
          <p className='text-sm font-bold text-gray-500'>
            {username}
          </p>
        </div>
        <div className='pl-4'>
          <p>{content}
            <span
              onClick={() => setShowInput(true)}
              className={(currentUserId != userId) ? 'text-sm text-gray-500 hover:underline hover:cursor-pointer' : 'hidden'}>
              Responder
            </span>
          </p>
        </div>
      </div>

      {
        showInput && <InputAnswer submit={sendComment} showInput={setShowInput} setValueComment={setValueComment} />
      }

      {
        (posts) && posts.filter(post => (
          post.parent === postId
        )).map((post) => (
          <div key={post._id} className={(level) ? 'ml-20' : ''}>
            <CommentCard
              postId={post._id}
              userId={post.userId._id}
              username={post.userId.name}
              url={post.userId.img}
              content={post.content}
              posts={posts}
              level={false}
            />
          </div>
        ))
      }
    </>
  )
}

const InputAnswer = ({ submit, showInput, setValueComment }) => {
  return (
    <div className='mb-1 mt-1'>
      {/* <h3 className='font-bold'>Comenta</h3> */}
      <textarea
        className='border rounded w-full h-16 p-2'
        placeholder='Escribe tu comentario...'
        onChange={(e) => setValueComment(e.target.value)}
      />
      <button className='bg-orange-300 rounded p-2 hover:bg-orange-400'
        onClick={() => submit()}
      >
        Comentar
      </button>
      <button className='border rounded p-2 '
        onClick={() => showInput(false)}
      >
        Cancelar
      </button>
    </div>
  )
}