import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {addPost, addMsg} from './redux/state.js';


export let rerenderAllTree = (state) =>  {
  ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <App appState={state} addPost={addPost} addMsg={addMsg}/>
    </React.StrictMode>,
  )  
}
