import React, { useEffect } from 'react'
import { Route,Routes, useNavigate,BrowserRouter as Router} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import toast, {Toaster} from 'react-hot-toast'
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './components/Profile';
import { axiosClient } from './utils/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated, setUser } from './redux/slices/noteSlice';
const App = () => {
  const isAuthenticated=useSelector(state=>state.noteReducer.isAuthenticated)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const fetchingUser=async()=>{
    try {
     const response = await axiosClient.get('/auth/me')
        if(response.data.statusCode===404 || response.data.statusCode===501){
          dispatch(setAuthenticated(false));
          navigate('/login')
          return toast.error(response.data.result);
        }
        dispatch(setAuthenticated(true));
        dispatch(setUser(response.data.result))
      }
      catch (error) {
      navigate('/login')
      toast.error(err.message)
    }
  }
  useEffect(()=>{
    fetchingUser()
  },[])
  return (
  //  <Router>
  <>
  <Toaster/>
  <Header/>
  <Routes>
    {
      isAuthenticated &&
      <>
  <Route path='/' element={<Home/>} />
    <Route path='/profile'element={<Profile/>} />
      </>
  }
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
  </Routes>
  </>
  //  </Router>
  )
}

export default App;