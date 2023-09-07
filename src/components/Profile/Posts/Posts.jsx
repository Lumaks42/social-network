import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post';

const Posts = () => {

  let postsData = [
    {id: 1, name: 'Alisa', msgMin: "It's not a good idea to follow the white rabbit.", like: 15},
    {id: 2, name: 'Cats', msgMin: 'Oh, the rabbit is my friend.', like: 15},
  ];
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
        <Post />
        <Post />
      </div>
      </div>
    </div>
    )
} 

export default Posts;