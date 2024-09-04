import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init();

const Ocean = () => {
    return (
        <div className='grid grid-cols-1'>
            <div className='grid grid-rows-1'>

                <div className='flex flex-col items-end justify-end  pt-35' >
                    {/* <h1 className='text'>WHAT IS IT</h1> */}
                    <div data-aos="fade-left" className='text-white w-[600px] text-justify p-4   text-2xl  m-20 backdrop-blur-lg' >
                        <h1 className='text-[50px] font-nohemi_m my-7'>What is it?</h1>
                        <p className='font-nohemi_l'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla incidunt numquam libero? Architecto est molestias odit repudiandae, laboriosam error et consequatur praesentium, assumenda maxime adipisci deserunt sit corporis voluptates!</p>
                    </div>


                </div>
            </div>


            <div className='grid grid-rows-1'>

                <div className='flex flex-col items-start justify-start  pt-35' >
                    {/* <h1 className='text'>WHAT IS IT</h1> */}
                    <div data-aos="fade-left" className='text-white w-[600px] text-justify p-4   text-2xl  m-20 backdrop-blur-lg' >
                        <h1 className='text-[50px] font-nohemi_m my-7'>Why is it?</h1>
                        <p className='font-nohemi_l'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla incidunt numquam libero? Architecto est molestias odit repudiandae, laboriosam error et consequatur praesentium, assumenda maxime adipisci deserunt sit corporis voluptates!</p>
                    </div>


                </div>

                <div className='grid grid-rows-1'>

                    <div className='flex flex-col items-end justify-end  pt-35' >
                        {/* <h1 className='text'>WHAT IS IT</h1> */}
                        <div data-aos="fade-left" className='text-white w-[600px] text-justify p-4   text-2xl  m-20 backdrop-blur-lg' >
                            <h1 className='text-[50px] font-nohemi_m my-7'>What is it?</h1>
                            <p  className='font-nohemi_l'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla incidunt numquam libero? Architecto est molestias odit repudiandae, laboriosam error et consequatur praesentium, assumenda maxime adipisci deserunt sit corporis voluptates!</p>
                        </div>


                    </div>
                </div>
            </div>
            {/* <div className='grid grid-rows-1'>

                <div className='flex items-start justify-start  pt-35' >
                    <p data-aos="fade-left" className='text-white w-[600px] text-justify p-4  shadow-lg rounded-lg text-2xl  m-20 backdrop-blur-lg' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla incidunt numquam libero? Architecto est molestias odit repudiandae, laboriosam error et consequatur praesentium, assumenda maxime adipisci deserunt sit corporis voluptates!</p>
                </div>
            </div> */}





        </div>

    )
}

export default Ocean