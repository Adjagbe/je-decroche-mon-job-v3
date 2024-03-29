import React from 'react'
import groupe2 from '../assets/Icons/Groupe2.png'
import profil from '../assets/images/black.jpg';
import Header from '../SCREENS/Header';

function Notification_page() {
  return (
    <>
        <Header/>

   <div className='bg-gray-200 w-full h-full flex flex-col items-center py-4'>

            <div className='flex flex-rows pt-3 justify-center'>
                <div className='text-gray-600 text-2xl'> Notifications  </div>
                <img src={groupe2} className=" w-12 h-10 pl-2" alt='photoCadre' />
            </div>

            

              {[0, 1, 2, 3, 4, 5, 6].map((data, index) => {
                  return <div className='bg-white h-20 w-1/2 my-1 flex items-center px-12 rounded'>

                      <img src={profil} className="w-12 h-12  rounded-full " alt='photoCadre' />

                      <div className='pl-5'>

                          <div className='flex flex-rows'>
                              <h1 className='font-semibold '>Kouassi Jean</h1> <span className='pl-2 text-sm '>a publié une offre d'emploi</span>
                          </div>

                          <div className='text-xs'> Description : Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                          </div>
                      </div>
                  </div>
              })}
    </div>
    
    </>
  )
}

export default Notification_page