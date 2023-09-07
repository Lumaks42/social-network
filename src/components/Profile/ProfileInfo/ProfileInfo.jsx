import React from 'react'
import c from './ProfileInfo.module.css'

const Profile = () => {
  return <div className={c.content}>
    <div className={c.info}>
      <div className={c.blockInfaId}>
        <img className={c.photo} src="./public/content/photo-page.jpg" />
        <h3 className={c.inscription}>#Avatar</h3>
      </div>
      <div className={c.idText}>
        <h3 className={c.nameText}>Loomax Aic</h3>
        <p className={c.online}>онлайн</p>
      </div>
      <p className={c.status}>Follow the white rabbit ... &#128007;</p>
    </div>
  </div>
}

export default Profile;