import React from 'react'
import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.item}>
          <div className={c.item__author}>
            <img src="./public/content/phPost.png"/>
            {props.name}
            <br/>
          </div>
            {props.message}
            <br/>
            <span>Likes: {props.likes}</span>
        </div>
    )
} 

export default Post;