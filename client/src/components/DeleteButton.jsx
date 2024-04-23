import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import ModalCustom from './ModalCustom'

const DeleteButton = ({ element, onDeleteHandler, type }) => {

    const deleteElement = (id) => {
        axios.delete(`http://localhost:8000/api/${type}/${id}`, { withCredentials: true })
            .then((e) => {
                console.log('Se elimino correctamente')
                onDeleteHandler(e)
            })
            .catch((err) => console.log(err))
    }
    const [popUpHandler, setPopUpHandler] = useState(false)

    return (<div>

        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" onClick={() => {
            setPopUpHandler(!popUpHandler)
        }} className=' font-medium whitespace-nowrap focus:outline-none rounded-full p-2 bg-red-700 text-white hover:bg-white hover:text-red-800'>
            <svg className="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
            </svg>
        </button>
        <ModalCustom handler={popUpHandler} type={'delete'} functionality={() => deleteElement(element._id)} handlerSetter={() => setPopUpHandler(!popUpHandler)} />
    </div>
    )
}

export default DeleteButton