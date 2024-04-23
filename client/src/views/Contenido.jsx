import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import UserContext from '../context/UserContext';
import { useContext } from "react";

const Contenido = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
            <header className='sticky top-0 z-10'>
                <NavBar />
            </header>
            <div className='flex flex-col mt-8 items-center content-center'>
                {/* Cuadro principal con texto e imagen */}
                <main className='flex flex-col md:flex-row p-4 m-4 w-3/4 justify-evenly backdrop-filter backdrop-blur-lg bg-transparent shadow rounded border-solid border-indigo-100 border-opacity-5'>
                    <section className='flex-1 p-4 flex flex-col items-center content-center justify-evenly'>
                        <h1 className='text-6xl font-bold text-gray-800 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 text-transparent bg-clip-text dark:text-white'>Lo mejor al alcance de tus manos</h1>
                        {/* Button de reserva */}
                        <div className='p-4'>
                            {!user ? <Link to='/register' className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'>Reservar!</Link>
                                : <Link to='/reserva' className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'>Reservar!</Link>
                            }
                        </div>
                    </section>
                    {/* imagen de la landing  Tiene que estar a la derecha*/}
                    <div className='flex-1'>
                        <img src="../public/images/landing.webp" className='rounded' alt="Manos con uñas pintadas" />
                    </div>
                </main>
                {/* Mapa
                
                <article>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14177.441706075908!2d-55.86069017023921!3d-27.33319819237566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457955cd27f0d4f%3A0x4715de2d88c9834e!2sPlaza%20de%20Armas!5e0!3m2!1ses!2spy!4v1713896908909!5m2!1ses!2spy" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article> 
                */}
            </div>

        </>

    )
}

export default Contenido