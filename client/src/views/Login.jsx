import React from 'react'
import UserForm from '../components/UserForm'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Login = () => {
  return (
    <>
      <NavBar />
      <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      <div className='flex flex-row p-10 items-center content-center justify-evenly'>
        <div>
          <UserForm formType='login' />
          <p>No tienes una cuenta?</p>
          <Link className='hover:underline text-blue-700' to='/register'>Registrate!</Link>
        </div>
      </div>
    </>
  )
}

export default Login