import React from 'react'
import cp from './CreatePost.module.css'

const CreatePost = () => {
  return <div className={cp.createPost}>
  <div className={cp.posts}>
  <div className={cp.posts__blockNewPost}>
      <textarea className={cp.posts__inputFields}/>
      <button className={cp.posts__button}>Отправить</button>
  </div>
  </div>
</div>
}

export default CreatePost;