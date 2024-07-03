import axios from 'axios'

import React from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const NavBar = () => {

    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const logOutUser = async () => {
        try {
            await axios.post("http://localhost:8000/api/auth/logout", { withCredentials: true });
            localStorage.removeItem("user");
            setUser(null);
            navigate("/login");
        } catch (err) {
            console.log("Error: ", err);

        }
    }



    return (
        <div>
            <nav className="p-4 overflow-auto sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-b
    border-b boder-solid border-indigo-100 border-opacity-5"
            >
                <div className="p-4 flex text-lg md:text-md items-center content-center justify-between h-12 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 text-transparent bg-clip-text text-center tracking-tighter">
                    <a href='/' className='font-bold text-4xl'>RS</a>
                    <div className="flex items-center content-center justify-evenly">
                        {!localStorage.getItem("user") ?
                            <NavLink to='/login' className="text-md text-slate-600 dark:text-slate-500 hover:underline">Login</NavLink> :

                            <div className='flex flex-row items-center content-center justify-between'>
                                <Link to='/reserva' className='text-md text-slate-600 dark:text-slate-500 hover:underline'>Reservar</Link>

                                {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).role === "admin" && (<>
                                    <Link to="/servicios" className="text-md ml-4 text-slate-600 dark:text-slate-500 hover:underline">Servicios</Link>
                                    <Link to="/reservas" className="texl-md ml-4 text-slate-600 dark:text-slate-500 hover:underline">Reservas</Link>
                                </>
                                )}

                                <button onClick={logOutUser} className="texl-md ml-4 text-slate-600 dark:text-slate-500 hover:underline">LogOut</button>
                            </div>
                        }
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar