import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Login from './components/login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Registration from './components/registration/Registration'
import './App.scss'
import Forgotpassword from './components/forgotpassword/Forgotpassword'
import Reset from './components/forgotpassword/Reset'
import AccessToken from './components/forgotpassword/AccessToken'
export default function App(){
  return(
    <>
    <ToastContainer/>
    <Router>
      <Routes>
        <Route path='/*' element={<Layout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='registration' element={<Registration/>}/>
        <Route path='forgot-password' element={<Forgotpassword/>}/>
        <Route path='reset-password/:resetToken' element={<Reset/> }/>
        <Route path='login-access/:accessToken' element={<AccessToken/>}/>
      </Routes>
    </Router>
    </>
  )
}