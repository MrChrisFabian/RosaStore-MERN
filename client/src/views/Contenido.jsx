import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import UserContext from '../context/UserContext';
import { useContext } from "react";
import CardService from '@/components/CardService';
import ButtonReserva from '@/components/ButtonReserva';

const Contenido = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <div className="absolute top-0 z-[-2]  transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
                <header className='sticky top-0 z-10'>
                    <NavBar />
                </header>
                <div className='flex flex-col mt-8 items-center content-center h-full'>
                    {/* Cuadro principal con texto e imagen */}
                    <main className='flex flex-col md:flex-row p-4 m-4 w-3/4 justify-evenly backdrop-filter backdrop-blur-lg bg-transparent shadow rounded border-solid border-indigo-100 border-opacity-5 flex-1'>
                        <section className='flex-1 p-4 flex flex-col items-center content-center justify-evenly'>
                            <h1 className='text-6xl font-bold text-gray-800 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 text-transparent bg-clip-text dark:text-white'>Lo mejor al alcance de tus manos</h1>
                            {/* Button de reserva */}
                            <ButtonReserva user={user} />
                        </section>
                        {/* imagen de la landing  Tiene que estar a la derecha*/}
                        <div className='flex-1'>
                            <img src="../public/images/landing.webp" className='rounded' alt="Manos con uñas pintadas" />
                        </div>
                    </main>

                    <article className='flex flex-col md:flex-row p-4 m-4 w-3/4 justify-evenly backdrop-filter backdrop-blur-lg bg-transparent shadow rounded border-solid border-indigo-100 border-opacity-5'>
                        <section className='flex-1 p-4 flex flex-col items-center content-center justify-evenly'>
                            <h1 className='text-2xl font-bold text-gray-800 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 text-transparent bg-clip-text dark:text-white'>Algunos servicios</h1>
                            <div id='services' className='flex md:flex-row flex-col mt-4 justify-evenly'>
                                <CardService imgSrc='../public/images/card1.webp' titulo='Manicura' text="Disfruta de una excelente atención" />
                                <CardService imgSrc='../public/images/card2.webp' titulo='Acrilicos' text="Solo lo mejor para tus manos" />
                                <CardService imgSrc='../public/images/card3.webp' titulo='Esmaltados' text="Arte que te acompaña" />                            </div>
                        </section>
                    </article>

                </div>

                <footer className='bg-black text-white p-8 flex flex-row justify-evenly'>
                    <div>
                        <p>Todos los derechos reservados ™</p>
                        <a href='https://chris-portafolio.netlify.app/' target='_blank'>Christopher Mendoza - 2024</a>
                    </div>
                    <div className='flex flex-row'>
                        <a href='https://github.com/MrChrisFabian/ProyectoIndividualMERN' target='_blank'>Repositorio </a>
                        <svg className="ml-2 w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </footer>
            </div>

        </>

    )
}

export default Contenido