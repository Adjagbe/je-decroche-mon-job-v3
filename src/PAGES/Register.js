


import { Link } from 'react-router-dom'
import Header from '../SCREENS/Header';
function Inscription() {
    return (
        <div className="App" >

            <Header/>

            <div className="">
                <div className=" text-center pt-10 pb-4 pr-10 font-semibold">INSCRIVEZ-VOUS POUR PROFITER DES OFFRES</div>
                <div className=" flex justify-center ">
                    <form className="grid grid-cols-1 gap-2 ">
                        <input type="text" className=" bg-gray-500  w-96  h-10 pl-4 italic placeholder-white " placeholder="Nom" />
                        <input type="text" className=" bg-gray-500  w-96 h-10 pl-4 italic placeholder-white " placeholder="Prenoms" />
                        <input type="tel" className=" bg-gray-500  w-96 h-10 pl-4 italic placeholder-white " placeholder="Numero de teléphone" />
                        <input type="email" className=" bg-gray-500  w-96  h-10 pl-4 italic placeholder-white" placeholder="E-mail " />
                        <input type="password" className=" bg-gray-500  w-96 h-10 pl-4 italic placeholder-white " placeholder="Mot de passe" />
                        <button className=" bg-orange-500 w-96 h-10 pl-4 font-bold text-white" >S’INSCRIRE</button>

                        <div class="flex flex-row space-x-20">
                           

                            <Link to="/Login"><div className="italic text-gray-600">Vous avez un compte? connectez-vous</div></Link>

                        </div>
                    </form>
                    
                </div>
                
            </div>
           
        </div>

    );
}

export default Inscription;
