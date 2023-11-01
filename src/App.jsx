import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Tasks from './components/Tasks/Tasks';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Knowledge from './components/Knowledge/Knowledge';
import Settings from './components/Settings/Settings';
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';

function App(props) {

  return (
    <BrowserRouter>
    <div className='wrap__app'>
      <Header/>
      <Navbar/>
        <div className='app__content'>
        <Routes>
          <Route path='/tasks'      element={<Tasks/>}/>
          <Route path='/profile'    element={<Profile state = {props.appState.profilePage}/>}/>
          <Route path='/dialogs'    element={<Dialogs state = {props.appState.messagePage}/>}/>
          <Route path='/news'       element={<News/>}/>
          <Route path='/knowledge'  element={<Knowledge/>}/>
          <Route path='/settings'   element={<Settings/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
