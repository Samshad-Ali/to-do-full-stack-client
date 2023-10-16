import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Toaster} from 'react-hot-toast'
import Header from './components/Header';
const App = () => {
  return (
  <>
  <Toaster/>
  <Header/>
  <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
  </Routes>
  </>
  )
}

export default App;