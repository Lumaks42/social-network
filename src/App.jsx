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
          <Route path='/tasks'      Component={() => <Tasks/>}/>
          <Route path='/profile'    Component={() => <Profile postsData={props.postsData}/>}/>
          <Route path='/dialogs/'   Component={() => <Dialogs/>}/>
          <Route path='/news'       Component={() => <News/>}/>
          <Route path='/knowledge'  Component={() => <Knowledge/>}/>
          <Route path='/settings'   Component={() => <Settings/>}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
