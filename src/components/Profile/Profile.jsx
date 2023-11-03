import React from 'react'
import c from './Profile.module.css'
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { addPost } from './../../redux/state';

const Profile = (props) => {
    return <div className={c.content}>
      <ProfileInfo />
      <Posts 
            postsData={props.state.postsData}  
            addPost = {props.addPost}
            />
    </div>
} 

export default Profile;