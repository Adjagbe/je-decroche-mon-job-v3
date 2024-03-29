import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import groupe3 from '../assets/Icons/Groupe3.png'
import groupe1 from '../assets/Icons/Groupe1.png'



function Routing() {
  return (
    <>
      <nav className='doc'>
        <ul>
          <li>
          <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/login"> <img src={groupe1} className=" w-10 h-10 " alt='photoCadre' /></Link>
          </li>
          <li>
          <Link to="/register"> Register</Link>
          </li>
          <li>
            <Link to="/Notification_page"> notification</Link>
          </li>
          <li>
            <Link to="/pwrd_forgot"> Mot de passe oublié</Link>
          </li>
          <li>
            <Link to="/postulant"> <img src={groupe3} className="w-10 h-10 " alt='photoCadre' /></Link>
          </li>
          </ul>
          </nav>

        <Outlet/>
    </>
    
  )
}


export default Routing
