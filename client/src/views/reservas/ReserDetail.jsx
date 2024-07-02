import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '@/components/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ReserDetail = () => {
    const [reserva, setReserva] = useState(null)
    const [loading, setLoading] = useState(true)


    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/reserva/${id}`, { withCredentials: true })
            .then((response) => {
                setReserva(response.data.Reserva)
                setLoading(false)
            })
            .catch((error) => {
                alert(error)
                setLoading(false)
            })
    }, [id])
    if (loading) {
        return <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
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

        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
            <NavBar />
            <div className='m-2 mt-6 flex flex-col content-center items-center'>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{reserva.user.firstName} {reserva.user.lastName}</h5>
                    <div>
                        <div className='p-1'>
                            <div className='flex'>
                                <h6 className="mb-3 mr-2 font-bold text-gray-700 dark:text-gray-400">Costo:</h6>
                                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{`${Number(reserva.cost).toLocaleString()}gs`}</p>
                            </div>
                            <div className='flex'>
                                <h6 className="mb-3 mr-2 font-bold text-gray-700 dark:text-gray-400">Servicio:</h6>
                                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{reserva.service}</p>
                            </div>
                            <div className='flex'>
                            <h6 className="mb-3 mr-2 font-bold text-gray-700 dark:text-gray-400">Fecha:</h6>
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{`${reserva.day}`}</p>
                        </div>
                        <div className='flex'>
                            <h6 className="mb-3 mr-2 font-bold text-gray-700 dark:text-gray-400">Hora:</h6>
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{`${reserva.hour}`}</p>
                        </div>

                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <a target='_blank' href={`https://wa.me/595${reserva.user.phone}`} className="text-purple-400 hover:text-white border border-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-300 dark:text-purple-300 dark:hover:text-white dark:hover:bg-grenn-4</th>00 dark:focus:ring-purple-900">Contactar</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReserDetail