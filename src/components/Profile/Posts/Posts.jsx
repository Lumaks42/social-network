import React from 'react'
import p from './Posts.module.css'
import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost';

const Posts = (props) => {

  let posts = props.postsData.map(post => <Post name={post.name} id={post.id} postText={post.postText} likes={post.likes} />);

    return (
    <div>
      <h2 className={p.posts__bigText}>My posts</h2>
      <br/>
      <CreatePost/>
      <div>
        {posts}
      </div>
    </div>
    )
} 

export default Posts;