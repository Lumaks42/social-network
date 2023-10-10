import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


let postsData = [
  {id: 1, name: 'Alisa', postText: "It's not a good idea to follow the white rabbit.", likes: 20},
  {id: 2, name: 'Cats', postText: "Oh, the rabbit is my friend.", likes: 15}
];


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App postsData = { postsData } />
  </React.StrictMode>,
)
