import React from 'react'
import NavBar from '../../components/NavBar'
import ReserForm from '../../components/ReserForm'

const Reserva = () => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <NavBar />
      <div className='flex flex-row p-10 items-center content-center  W-1/2 justify-evenly'>
        <ReserForm />
      </div>
    </>
  )
}

export default Reserva