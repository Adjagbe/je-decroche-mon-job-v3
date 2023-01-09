import React from 'react'
import word from "../assets/images/logo.png"
import groupe1 from '../assets/Icons/Groupe1.png'
import groupe2 from '../assets/Icons/Groupe2.png'
import groupe3 from '../assets/Icons/Groupe3.png'
import { Link } from 'react-router-dom'
function Header() {
  return (
      <div className="bg-black w-full h-40 grid grid-cols-2 ">
          <Link to="/"> <img src={word} className="w-72 pt-4 pl-28" /></Link>

          <div className=" flex flex-row space-x-4 pt-14 pl-80">
              <Link to="/login"> <img src={groupe1} className=" w-10 h-10 " /></Link>
              <Link to="/Notification_page"><img src={groupe2} className=" w-10 h-10" /></Link>
              <Link to="/dashboard"><img src={groupe3} className="w-10 h-10 " /></Link>
          </div>
      </div>
  )
}

export default Header