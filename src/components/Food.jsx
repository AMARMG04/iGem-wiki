import React from 'react'
import Foods from "../assets/food.png"
import Body from "../assets/body.png"
const Food = () => {
    return (
        <div>
            <div className="bg-customCream h-auto">
                <h1 className="font-nohemi_m text-[70px] text-center pt-[120px]">How Does It Affect Food</h1>

                <div className="pt-[90px] grid grid-cols-2">
                    <div className="relative col-span-1 w-1/2 flex mx-auto items-center justify-center" data-aos="fade-right">
                        <img src={Foods} alt="" className='' />
                        <div className='z-1  rounded-full absolute right-10 top-[100px]  bg-red-600 w-[9px] h-[15px]  animate-float'></div>
                        <div className='z-1  rounded-full absolute right-10 bottom-[90px]  bg-blue-600 w-[9px] h-[15px]  animate-float'></div>
                        <div className='z-1  rounded-full absolute left-7 top-[190px]  bg-red-600 w-[9px] h-[15px]  animate-float'></div>
                        <div className='z-1  rounded-full absolute right-[170px] top-[60px]  bg-yellow-600 w-[9px] h-[15px]  animate-float'></div>
                        <div className='z-1  rounded-full absolute left-[60px] bottom-[90px]  bg-blue-600 w-[9px] h-[15px]  animate-float'></div>
                        <div className='z-1  rounded-full absolute right-[170px] bottom-[40px]  bg-green-600 w-[9px] h-[15px]  animate-float'></div>
                        <div className='z-1  rounded-full absolute left-11 top-[80px]  bg-green-600 w-[9px] h-[15px]  animate-float'></div>
                        <div className='z-1  rounded-full absolute right-[30px] top-[190px]  bg-yellow-600 w-[9px] h-[15px]  animate-float'></div>



                    </div>
                    <div className="col-span-1  justify-start" data-aos="fade-left">
                        <p className='font-nohemi_l text-justify text-[25px] pt-9 mr-[100px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos commodi ut est neque, deserunt impedit consectetur explicabo quia accusamus minus iste accusantium ipsum molestiae! Eius dicta itaque quo et omnis. minus iste accusantium ipsum molestiae! Eius dicta itaque quo et omnis minus iste accusantium ipsum molestiae! Eius dicta itaque quo et omnis</p>
                    </div>
                </div>


                <div className='mt-[180px]'>
                    <div className="grid grid-cols-2" data-aos="fade-right">
                        <div className="col-span-1  justify-start">
                            <p className='font-nohemi_l text-justify text-[25px] pt-9 ml-[100px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos commodi ut est neque, deserunt impedit consectetur explicabo quia accusamus minus iste accusantium ipsum molestiae! Eius dicta itaque quo et omnis. minus iste accusantium ipsum molestiae! Eius dicta itaque quo et omnis minus iste accusantium ipsum molestiae! Eius dicta itaque quo et omnis</p>
                        </div>
                        <div className="col-span-1 flex mx-auto items-center justify-center" data-aos="fade-left">
                            {/* <div className=''> */}

                            <img src={Body} alt="" className='w-[800px] mb-20' />
                            {/* </div> */}
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Food