import React, { useState, useEffect } from 'react'; // Add import statement
import axios from 'axios'; // Add import statement
import { Link } from 'react-router-dom'; // Add import statement
import DeleteButton from '../../components/DeleteButton';
import NavBar from '@/components/NavBar';

const ServiceList = () => {
    const [services, setServices] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDeleteClick = () => {
        console.log('delete clicked')
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/service', { withCredentials: true })
            .then((response) => {
                setServices(response.data.Service)
                setIsLoading(false)
            })
            .catch((error) => {
                alert(error)
                setIsLoading(false)
            })
    }, [handleDeleteClick]);
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
        <div className='bg-rose-100'>
            <NavBar />
            <div div className='flex flex-col md:items-center items-start content-center justify-center m-2 overflow-auto ' >
                <div id='container' className=' bg-white border border-gray-200 rounded-lg shadow w-fit  p-4 '>
                    <p>{error}</p>
                    {/* encabezado */}
                    <div className='flex items-center content-center justify-between'>
                        <h1 className='mb-2'>Lista de Servicios</h1>
                        <Link className="my-2 w-32 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={'/servicios/new'}>Agregar un Servicio</Link>
                    </div>
                    {/* tabla */}
                    <table className="overflow-scroll mt-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Servicio
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Costo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services && services.map((e) => (
                                <tr key={e._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {e.titulo}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {Number(e.cost).toLocaleString()} gs
                                    </th>
                                    <th scope="row" className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <Link to={`/${e._id}/update`} className="text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-300 dark:text-green-300 dark:hover:text-white dark:hover:bg-grenn-400 dark:focus:ring-green-900">Actualizar</Link>
                                        <DeleteButton element={e} type={'service'} onDeleteHandler={handleDeleteClick} />
                                    </th>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div></div>

    )
}

export default ServiceList