import React from 'react'

const ModalCustom = ({ handler, handlerSetter, type, functionality }) => {

    return (
        <div id="popup-modal" tabIndex="-1" className={` ${handler ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative backdrop-filter backdrop-blur-lg bg-transparent  rounded-lg shadow border-b boder-solid border-indigo-100 border-opacity-5 ">

                    <div className="p-4 md:p-5 text-center">
                        {type === 'delete' ?
                            <svg className="mx-auto mb-4 text-yellow-400 w-12 h-12 dark:text-yellow-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg> :
                            <svg className="mx-auto text-green-800 dark:text-green-200 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        }

                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{type === 'delete' ? 'Estas seguro que quieres eliminar este elemento?' : 'Su reserva se ha guardado correctamente'}</h3>
                        {type === 'delete' ? <button onClick={functionality} type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Si,Estoy seguro
                        </button> :
                            <button onClick={functionality} type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Ok!
                            </button>}

                        {type === 'delete' ? <button onClick={handlerSetter} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancelar</button> : ''}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCustom