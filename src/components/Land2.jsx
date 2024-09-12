import React from 'react';
import Plant from "../assets/plant.png";
import BrownWave from "../assets/wavebr.png";

const Land2 = () => {
    return (
        <div className='bg-customCream'>
            <div>
                <h1 className='mb-[550px] text-center font-nohemi_m text-[70px]'>
                    How Does It Affect The Land
                </h1>
            </div>

            <div className='relative'>

                <div>
                    <img src={BrownWave} className='w-full' alt="" />
                    <div className='h-screen bg-brown'></div>
                </div>

                <div className='absolute bottom-[580px] left-[40%]'>
                    <img src={Plant} className='w-[300px]' alt="" />
                </div>

                <div className='absolute top-[-400px] ml-12'>
                    <h1 className='font-nohemi_sb text-3xl pb-3'>Heading</h1>
                    <h1 className='font-nohemi_r text-xl w-1/3 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptates nostrum?
                        Amet recusandae porro iure tenetur illo explicabo est accusamus. Consequatur eaque illo
                        dolor soluta fuga quo voluptatem architecto quam. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Corporis, voluptates nostrum? Amet recusandae porro iure tenetur illo
                        explicabo est accusamus.
                    </h1>
                </div>

                <div className='rightside absolute top-[-395px] left-[1000px]'>
                <h1 className='font-nohemi_sb text-3xl pb-3'>Heading</h1>

                    <h1 className='font-nohemi_r text-xl w-4/5 text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia totam autem harum optio
                        numquam magni nihil illum! Dolorem, ut? Et vitae natus magnam, culpa reprehenderit ipsa
                        aut odio veniam ea.
                    </h1>
                </div>

            </div>





        </div>
    );
};

export default Land2;
