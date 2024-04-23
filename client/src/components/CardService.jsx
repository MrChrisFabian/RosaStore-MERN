import React from 'react'
import ButtonReserva from './ButtonReserva'

const CardService = ({ imgSrc, text, titulo }) => {
    return (
        <div className='mx-2 my-2 md:my-0'>


            <div className="block max-w-sm p-6 bg-slate-500 bg-opacity-5 backdrop-filter backdrop-blur-lg bg-transparent rounded border-solid border-indigo-100 border-opacity-5 shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded" src={imgSrc} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-xl font-bold  text-gray-900 ">{titulo}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
                    <ButtonReserva />
                </div>
            </div>

        </div>
    )
}

export default CardService