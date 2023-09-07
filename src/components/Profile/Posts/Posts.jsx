import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post';

const Posts = () => {
    return (
    <div>
      <h2 className={p.posts__bigText}>My posts</h2>
      <br/>
      <div className={p.posts}>
      <div className={p.posts__blockNewPost}>
          <textarea className={p.posts__inputFields}/>
          <button className={p.posts__button}>Отправить</button>
      </div>
      <div>
        <Post name="Alisa " message="It's not a good idea to follow the white rabbit." likes="15"/>
        <Post name="Cats " message="Oh, the rabbit is my friend." likes="20"/>
      </div>
      </div>
    </div>
    )
} 

export default Posts;