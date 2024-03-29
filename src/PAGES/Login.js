


import key from '../assets/images/key-fill.png'
import { Link } from 'react-router-dom'
import Header2 from '../SCREENS/Header-2';
function App() {
    return (
        <div className="App" >

            <Header2/>

            <div className="">
                <div className=" text-center pt-10 pb-4 pr-28 font-semibold">CONNECTEZ-VOUS POUR POSTULER </div>
                <div className=" flex justify-center ">
                    <form className="grid grid-cols-1 gap-2 ">
                        <input type="text" className=" bg-gray-500 w-96 h-10 pl-4 italic text-white placeholder-white " placeholder="Saisissez votre Identifiant" />
                        <input type="password" className=" bg-gray-500 w-96 h-10 pl-4 italic  text-white placeholder-white" placeholder="Saisissez votre Mot de passe" />
                        <button className=" bg-orange-500 w-96 h-10 pl-4 font-bold text-white" >CONNEXION</button>

                        <div class="flex flex-row space-x-20">
                            <Link to="/pass_forgot"><div className='flex felx-row space-x-2'> <img src={key} className="w-4 h-5 pt-3" alt='photoCadre' /> <div className="italic text-gray-600">  Mot de passe oublié ?</div> </div></Link>

                            <Link to="/register"><div className="italic text-gray-600">S'inscrire</div></Link>

                        </div>

                    </form>

                </div>
            </div>

        </div>

    );
}

export default App;
