import React from 'react'
import NewNavbar from '../components/NewNavbar'
import World from '../assets/world.png'

const Home = () => {
  return (
    <div className='bg-black h-screen relative'>
      <NewNavbar />
      <div className='text-white relative z-0'>
        <h1 className='text-center mt-[20px] text-[100px] font-keania relative'>
          MICROPLASTIC
        </h1>
      </div>
      <div className="flex justify-center items-center absolute  top-28 z-10">
        <img src={World} alt="World" className='w-[650px] h-auto' />
      </div>
    </div>
  )
}

export default Home
