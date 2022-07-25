import { useEffect, useState } from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import moment from 'moment'
import 'moment/locale/es';

moment.locale('es')

const currentThreadId = '62c603967aab484dbc31899c'
const currentUserId = '61f1ec20fdd7f68793bda2d0'
const currentUserImg = 'https://pbs.twimg.com/profile_images/1327879994119507968/pT6xJXYJ_400x400.jpg'

export const ThreadPage = () => {
  const [thread, setThread] = useState()
  const [posts, setPosts] = useState([])
  const [newComment, setNewComment] = useState()

  const rootPosts = posts.filter(post => post.parent === undefined).sort((a, b) => {
    if (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime())
      return 1
    else if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime())
      return -1
    else
      return 0
  })

  const haveChildren = (idParent) => {
    return posts.find(post => (
      post.parent === idParent
    ))
  }
  const addComment = (comment) => {
    const bodyComment = {
      threadId: currentThreadId,
      userId: currentUserId,
      ...comment
    }
    fetch('https://task-js.herokuapp.com/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyComment)
    })
      .then(res => res.json())
      .then(data => {
        //IMPORT
        if (data.ok) {
          setPosts([...posts, data.post])
          alert('COMENTARIO AGREGADO')
        }
      })
  }
  const editComment = (comment, postId) => {
    const bodyComment = {
      userId: currentUserId,
      ...comment
    }
    fetch(`https://task-js.herokuapp.com/api/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyComment)
    })
      .then(res => res.json())
      .then(data => {
        //IMPORT
        if (data.ok) {
          const tempPosts = posts.filter(post => post._id !== postId)
          setPosts([...tempPosts, data.post])
          alert('COMENTARIO EDITADO')
        }
      })
  }
  const deleteComment = (postId) => {
    fetch(`https://task-js.herokuapp.com/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: currentUserId
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          setPosts(posts.filter(post => post._id !== postId))
          alert('COMENTARIO ELIMINADO')
        }
      })
  }

  useEffect(() => {
    fetch(`https://task-js.herokuapp.com/api/threads/${currentThreadId}`)
      .then(res => res.json())
      .then(data => {
        setThread(data.thread)
        setPosts(data.posts)
      })
  }, [])
  console.log({ posts })

  return (
    <>
      {/* <Navbar /> */}
      <div className='bg-white m-12'>
        <div>
          {
            thread ?
              <CommentCard
                url={thread.userId.img}
                username={thread.userId.name}
                title={thread.title}
                content={thread.content}
                publicationDate={moment(thread.createdAt).fromNow()}
              />
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
            onClick={() => addComment({ content: newComment })}
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
                publicationDate={moment(post.createdAt).fromNow()}
                posts={posts}
                level={true}
                children={haveChildren(post._id)}
                addComment={addComment}
                editComment={editComment}
                deleteComment={deleteComment}
              />
            })
          }
        </div>
      </div>
    </>
  )
}


const CommentCard = ({ postId, userId, url, username, content, title, posts, level, children, publicationDate, deleteComment, addComment, editComment }) => {
  const [showInput, setShowInput] = useState(false)
  const [showAnswers, setShowAnswers] = useState(children)
  const [valueComment, setValueComment] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const cancelButton = () => {
    setIsEditing(false)
    setShowInput(false)
  }
  const submitButton = () => {
    if (isEditing) {
      editComment({ content: valueComment }, postId)
    } else {
      addComment({ content: valueComment, parent: postId })
    }
    setShowInput(false)
    setIsEditing(false)
  }
  return (
    <>
      {
        title
          ? <h2 className='text-2xl' >{title}</h2>
          : null
      }
      <div className='border-t flex p-2'>
        <div className='w-16 pr-4'>
          <img
            className='w-full rounded-md'
            src={url}
          />
        </div>
        <div className='w-full'>
          <div>
            <p className='text-sm font-black text-black'>
              {username} <span className='text-gray-400 font-normal'>{publicationDate}</span>
            </p>
            <p className={(isEditing) ? 'hidden' : ''} >{content}</p>
          </div>
          <div className='flex justify-end'>
            <span
              onClick={() => setShowInput(true)}
              className={(currentUserId != userId) ? 'text-sm text-gray-500 pl-2 hover:underline  cursor-pointer' : 'hidden'}>
              Responder
            </span>
            <span
              onClick={() => { setShowInput(true); setIsEditing(true) }}
              className={(currentUserId == userId) ? 'text-sm text-gray-500 pl-2 hover:underline cursor-pointer' : 'hidden'}>
              Editar
            </span>
            <span
              onClick={() => deleteComment(postId)}
              className={(currentUserId == userId) ? 'text-sm text-gray-500 pl-2 hover:underline cursor-pointer' : 'hidden'}>
              Eliminar
            </span>
          </div>
          {
            showInput && <InputAnswer
              submitButton={submitButton}
              cancelButton={cancelButton}
              isEditing={isEditing}
              setValueComment={setValueComment}
              valueComment={content}
            />
          }
          <div>
            {
              children && level ?
                <a className='cursor-pointer text-md font-bold text-[#f39e2f]' onClick={() => setShowAnswers(!showAnswers)}>
                  {
                    (showAnswers) ? 'Ver respuestas' : 'Ocultar respuestas'
                  }
                </a>
                : null
            }
          </div>
        </div>
      </div>
      <div className={(!showAnswers) ? '' : 'hidden'}>
        {
          (posts) && posts.filter(post => (
            post.parent === postId
          )).map((post) => (
            <div key={post._id} className={(level) ? 'ml-16' : 'ml-16'}>
              <CommentCard
                postId={post._id}
                userId={post.userId._id}
                username={post.userId.name}
                url={post.userId.img}
                content={post.content}
                publicationDate={moment(post.createdAt).fromNow()}
                posts={posts}
                level={false}
                children={false}
                addComment={addComment}
                editComment={editComment}
                deleteComment={deleteComment}
              />
            </div>
          ))
        }
      </div>
    </>
  )
}

const InputAnswer = ({ submitButton, cancelButton, isEditing, setValueComment, valueComment }) => {
  return (
    <div className='flex mb-1 mt-1'>
      {/* <h3 className='font-bold'>Comenta</h3> */}
      <div className={(isEditing) ? 'hidden' : 'w-16 pr-4'}>
        <img
          className='w-full rounded-md'
          src={currentUserImg}
        />
      </div>
      <div className='w-full'>
        <textarea
          className='border rounded w-full h-16 p-2'
          placeholder='Escribe tu comentario...'
          defaultValue={(isEditing) ? valueComment : ''}
          onChange={(e) => setValueComment(e.target.value)}
        />
        <div className='flex justify-end'>
          <button className='border rounded p-2 '
            onClick={() => cancelButton()}
          >
            Cancelar
          </button>
          <button className='bg-gray-500 text-white rounded p-2 ml-2'
            onClick={() => submitButton()}
          >
            Comentar
          </button>
        </div>
      </div>
    </div>
  )
}