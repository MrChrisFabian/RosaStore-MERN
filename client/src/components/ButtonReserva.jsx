import { Link } from "react-router-dom"
const ButtonReserva = ({ user }) => {
    return (
        <div className='p-4'>
            {!user ? <Link to='/register' className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'>Reservar!</Link>
                : <Link to='/reserva' className='text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'>Reservar!</Link>
            }
        </div>)
}

export default ButtonReserva