

import silde from '../assets/images/silde.png'
import Header from '../SCREENS/Header';



function Home() {
    return <>

            <Header/>

            <div className=""><img src={silde}/></div>

            <form className='grid grid-cols-3 pl-40 my-12'>
                <input className='border-solid border-2 w-96 h-16 rounded-xl pl-4 ' type="text" placeholder="Métier, Poste, entreprise, mot clés" />
                <input className='border-solid border-2 w-96 h-16 rounded-xl pl-4' type="text" placeholder="Ville, Commune, Adresse" />
                <button className='bg-orange-500 w-72 rounded-xl text-white font-semibold'> RECHERCHER</button>
            </form>

            <div className='flex flex-col justify-center py-20 bg-gray-200'>
                <div className='inline-flex justify-center'>
                  <div className='text-center bg-orange-500 px-4 flex items-center justify-center h-12 text-white font-semibold mb-20'> RÉCEMMENT PUBLIÉ</div>
                </div>

                <div className='grid grid-cols-4 px-12 pb-20'>
                    <div className='bg-white w-72 h-72 grid place-items-end py-4 px-4'>
                        <button className='bg-orange-500 w-24 text-white font-semibold rounded text-sm ' >POSTULER</button>
                    </div>

                    <div className='bg-white w-72 h-72 grid place-items-end pb-4 pr-4'>
                        <button className='bg-orange-500 w-24 text-white font-semibold rounded text-sm ' >POSTULER</button>
                    </div>

                    <div className='bg-white w-72 h-72 grid place-items-end pb-4 pr-4'>
                        <button className='bg-orange-500 w-24 text-white font-semibold rounded text-sm ' >POSTULER</button>
                    </div>

                    <div className='bg-white w-72 h-72 grid place-items-end pb-4 pr-4'>
                        <button className='bg-orange-500 w-24 text-white font-semibold rounded text-sm ' >POSTULER</button>
                    </div>
                </div>
            </div>
    </>;
}

export default Home;
