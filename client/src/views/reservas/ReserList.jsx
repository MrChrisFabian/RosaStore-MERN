import React, { useState, useEffect } from 'react'; // Add import statement
import axios from 'axios'; // Add import statement
import { Link } from 'react-router-dom'; // Add import statement
import DeleteButton from '../../components/DeleteButton';
import NavBar from '@/components/NavBar';
import useReserData from '@/hooks/reserData';


const ReserList = () => {
    const [trigger, setTrigger] = useState(false)
    const { reservas, isLoading, error } = useReserData(trigger)

    const handleDeleteClick = () => {
        setTrigger(!trigger)
    }

    if (isLoading) {
        return <>
            <NavBar />
            <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Info alert!</span> Is Loading...
                </div>
            </div></>
    }
    return (
        <div className='bg-rose-100 min-h-screen'>
            <NavBar />
            <div div className='flex flex-col  md:items-center items-start content-center justify-center m-2 overflow-auto' >
                <div id='container' className='bg-white border border-gray-200 rounded-lg shadow w-fit p-2'>
                    <p>{error}</p>
                    {/* encabezado */}
                    <div className='flex items-center content-center justify-between'>
                        <h1 className='mb-2'>Lista de Reservas</h1>
                    </div>
                    {/* tabla */}
                    <table className="overflow-scroll mt-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Cliente
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fecha
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Más
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservas && reservas.map((e) => (
                                <tr key={e._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {e.user.firstName} {e.user.lastName}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {e.day}
                                    </th>
                                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <Link to={`/reservas/${e._id}/detail`} type="button" className="text-white bg-blue-700  hover:text-blue-700 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                            </svg>
                                            <span className="sr-only">Icon description</span>
                                        </Link>
                                        <DeleteButton element={e} type={'reserva'} onDeleteHandler={handleDeleteClick} />
                                    </th>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
}

export default ReserList