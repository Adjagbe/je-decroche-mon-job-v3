import './index.css';
import React from 'react'
import Home from './PAGES/Home'
import Login from './PAGES/Login'
import Register from './PAGES/Register'
import Postulant from './PAGES/Postulant'
import PassForgot from './PAGES/PassForgot'
import NotificationPage from './PAGES/Notification_page'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./SCREENS/FOOTER";

export default function App() {
  return (
    <Router>
      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="pass_forgot" element={<PassForgot />} />
          <Route path="register" element={<Register />} />
          <Route path="notification_page" element={<NotificationPage />} />
          <Route path="dashboard" element={<Postulant />} />

      </Routes>
      <Footer/>
    </Router>
    
  )
}