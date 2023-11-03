import React from 'react';
import cp from './CreatePost.module.css';

export const CreatePost = () => {

  let newPostElm = React.createRef();

  let addPost = () => {
    let text = newPostElm.current.value;
    props.addPost(text);
  };

  return <div className={cp.createPost}>
    <div className={cp.posts}>
      <div className={cp.posts__blockNewPost}>
        <textarea ref={newPostElm} className={cp.posts__inputFields} />
        <button onClick={addPost} className={cp.posts__button}>Отправить</button>
      </div>
    </div>
  </div>;
};
