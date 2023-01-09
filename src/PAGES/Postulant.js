import Header from '../SCREENS/Header'



function Home() {
    return (
        <div className="">

                <Header/>

            <div className='font-bold text-3xl text-center py-10'> COMPTE POSTULANT</div>
            
            <div className='grid grid-cols-4 py-6 px-8 '>
                <div className='bg-blue-100 h-10 font-semibold pl-4 pt-2'>REF</div>
                <div className='bg-green-100 h-10 font-semibold pl-4 pt-2'>OFFRE</div>
                <div className='bg-blue-100 h-10 font-semibold pl-4 pt-2'>POSTULER LE</div>
                <div className='bg-green-100 h-10 font-semibold pl-4 pt-2'>EXPIRATION</div>
            </div>
            <div class="grid grid-cols-1 divide-y divide-gray-500 px-8">
                <div className='grid grid-cols-4 gap-4'>
                    <div className='text-xs font-semibold'>JDMJ001</div>
                    <div className='text-xs font-semibold'>Assistante de direction | 100.000f | Cocody rivera | Boost Business</div>
                    <div className='text-xs font-semibold'>03 | 11 | 2022 - 12:03:55</div>
                    <div className='text-xs font-semibold'>03 | 12 | 2022</div>
                </div>
                <div>3</div>
                <div>2</div>
                <div>3</div>
                <div>2</div>
                <div>3</div>
                <div>2</div>
                <div>3</div>
                <div>2</div>
                <div>3</div>
                <div>2</div>
                <div>3</div>
                <div>2</div>
            </div>

        </div>
    );
}

export default Home;
