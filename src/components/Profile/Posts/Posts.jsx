import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post';

const Posts = () => {

  let postsData = [
    {id: 1, name: 'Alisa', postText: "It's not a good idea to follow the white rabbit.", likes: 20},
    {id: 2, name: 'Cats', postText: 'Oh, the rabbit is my friend.', likes: 15},
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
        <Post name={postsData[0].name} message={postsData[0].postText} id={postsData[0].id} likes={postsData[0].likes}/>
        <Post name={postsData[1].name} message={postsData[1].postText} id={postsData[1].id} likes={postsData[1].likes}/>
      </div>
      </div>
    </div>
    )
} 

export default Posts;