import React from 'react'
import cp from './CreatePost.module.css'

const CreatePost = (props) => {

  let newPostElm = React.createRef();

  let addNewPost = () => {
    let text = newPostElm.current.value;
    props.addPost(text);
    newPostElm.current.value = '';
  }

  return <div className={cp.createPost}>
  <div className={cp.posts}>
  <div className={cp.posts__blockNewPost}>
      <textarea ref={newPostElm} className={cp.posts__inputFields}/>
      <button onClick = { addNewPost } className={cp.posts__button}>Отправить</button>
  </div>
  </div>
</div>
}

export default CreatePost;