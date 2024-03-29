import React from 'react'
import { Link } from 'react-router-dom'
import word from "../assets/images/logo.png"

function Header2() {
  return (
    <Link to="/"> <div className="bg-black w-full h-60 flex justify-center"><img src={word} className="w-50 " alt='photoCadre' /></div></Link>
  )
}

export default Header2