import NavBar from '@/components/NavBar';
import ServiceForm from '@/components/ServiceForm';
import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceUpdate = () => {
  const { id } = useParams();

  return (
    <>
<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>      <NavBar />
      <div className='flex flex-row p-10 items-center content-center justify-evenly'>
        <div>
          <ServiceForm formtype={'update'} id={id} />
        </div>
      </div>
    </>
  )
}

export default ServiceUpdate