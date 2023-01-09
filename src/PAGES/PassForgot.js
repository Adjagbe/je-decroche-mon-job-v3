import React from 'react'
import Header2 from '../SCREENS/Header-2'

function PassForgot() {
  return (
      <div className="App" >

         <Header2/>

          <div className="">
              <div className=" text-center pt-10 pb-4 pr-28 font-semibold">RÉINITIALISATION DU MOT DE PASSE </div>
              <div className=" flex justify-center ">
                  <form className="grid grid-cols-1 gap-2 ">
                      <input type="email" className=" bg-gray-500 w-96 h-10 pl-4 italic placeholder-white " placeholder="Saisissez votre E-mail " />
                      <input type="password" className=" bg-gray-500 w-96 h-10 pl-4 italic placeholder-white" placeholder="Saisissez un nouveau Mot de passe" />
                      <button className=" bg-orange-500 w-96 h-10 pl-4 font-bold text-white" >VALIDER</button>


                  </form>

              </div>
          </div>

      </div>

  )
}

export default PassForgot