import React from 'react';
import Plant from "../assets/plant.png";
import BrownWave from "../assets/wavebr.png";

const Land2 = () => {

    const style = `
    
@keyframes float-northwest {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(-10px, -10px); /* Move towards the northwest */
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes float-northeast {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(10px, -10px); /* Move towards the northeast */
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.float-northwest {
  animation: float-northwest 4s ease-in-out infinite; /* Adjust duration as needed */
}

.float-northeast {
  animation: float-northeast 4s ease-in-out infinite; /* Adjust duration as needed */
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.floating {
  animation: float 3s ease-in-out infinite;
}

  `
    return (
        <div className='bg-customCream'>
            <div>
                <h1 className='mb-[550px] pt-[120px] text-center font-nohemi_m text-[70px]' data-aos="fade-up" data-aos-duration="2000">
                    How Does It Affect The Land
                </h1>
            </div>

            <div className='relative'>

                <div>
                    <img src={BrownWave} className='w-full' alt="" />
                    <div className='h-[400px] bg-brown'></div>
                </div>
                <style>{style}</style>

                <div className='absolute bottom-[160px] left-[40%]'>
                    <div className='relative'>

                    <img src={Plant} className='w-[300px]' alt="" />

                    <div className='z-50 rounded-full absolute right-[0px] bottom-[100px] bg-red-600 w-[9px] h-[15px] float-northwest'></div>
                    <div className='z-50 rounded-full absolute left-[0px] bottom-[100px] bg-yellow-600 w-[9px] h-[15px] float-northeast'></div>
                    <div className='z-50 rounded-full absolute right-[50px] bottom-[0px] bg-orange-600 w-[9px] h-[15px]  float-northwest'></div>
                    <div className='z-50 rounded-full absolute left-[30px] bottom-[40px] bg-green-600 w-[9px] h-[15px]  float-northeast'></div>
                    <div className='z-50 rounded-full absolute right-[120px] bottom-[-30px] bg-red-600 w-[9px] h-[15px]  float-northwest'></div>
                    <div className='z-50 rounded-full absolute right-[190px] bottom-[-30px] bg-yellow-600 w-[9px] h-[15px]  float-northwest'></div>
                    <div className='z-50 rounded-full absolute left-[0px] bottom-[-30px] bg-red-600 w-[9px] h-[15px]  float-northeast '></div>

                    <div className='z-50 rounded-full absolute left-[-90px] bottom-[30px] bg-green-600 w-[9px] h-[15px] float-northeast'></div>
                    <div className='z-50 rounded-full absolute right-[-90px] bottom-[30px] bg-red-600 w-[9px] h-[15px]  float-northwest'></div>
                    <div className='z-50 rounded-full absolute right-[-60px] bottom-[-30px] bg-red-600 w-[9px] h-[15px]  float-northwest'></div>
                    <div className='z-50 rounded-full absolute left-[-40px] bottom-[30px] bg-red-600 w-[9px] h-[15px]  float-northeast'></div>
                    <div className='z-50 rounded-full absolute right-[-40px] bottom-[30px] bg-red-600 w-[9px] h-[15px]  float-northwest'></div>
                    <div className='z-50 rounded-full absolute left-[140px] bottom-[90px] bg-yellow-600 w-[9px] h-[15px] float-northeast'></div>
                    <div className='z-50 rounded-full absolute left-[180px] bottom-[120px] bg-red-600 w-[9px] h-[15px] float-northeast'></div>
                    <div className='z-50 rounded-full absolute left-[150px] bottom-[180px] bg-green-600 w-[9px] h-[15px] float-northeast'></div>

                    <div className='z-50 rounded-full absolute left-[80px] bottom-[150px] bg-orange-600 w-[9px] h-[15px]  float-northeast'></div>
                    <div className='z-50 rounded-full absolute right-[80px] bottom-[150px] bg-red-400 w-[9px] h-[15px] float-northwest'></div>
                    <div className='z-50 rounded-full absolute left-[150px] bottom-[240px] bg-yellow-600 w-[9px] h-[15px]  float-northeast'></div>
                    <div className='z-50 rounded-full absolute left-[157px] bottom-[280px] bg-orange-600 w-[9px] h-[15px] floating'></div>
                    <div className='z-50 rounded-full absolute left-[158px] bottom-[360px] bg-red-600 w-[9px] h-[15px] floating'></div>
                    <div className='z-50 rounded-full absolute left-[156px] bottom-[470px] bg-yellow-600 w-[9px] h-[15px] floating'></div>

                    <div className='z-50 rounded-full absolute left-[156px] bottom-[570px] bg-green-600 w-[9px] h-[15px] floating'></div>
                    <div className='z-50 rounded-full absolute left-[156px] bottom-[670px] bg-red-600 w-[9px] h-[15px] floating'></div>
                    <div className='z-50 rounded-full absolute left-[116px] bottom-[520px] bg-yellow-600 w-[9px] h-[15px] float-northwest'></div>


                    <div className='z-50 rounded-full absolute right-[116px] bottom-[530px] bg-red-400 w-[6px] h-[11px] float-northeast'></div>
                    <div className='z-50 rounded-full absolute right-[116px] bottom-[760px] bg-red-600 w-[6px] h-[11px] float-northeast'></div>
                    <div className='z-50 rounded-full absolute left-[116px] bottom-[760px] bg-yellow-600 w-[6px] h-[11px]  floating'></div>



                    </div>
                </div>

                <div className='absolute top-[-400px] ml-12'>
                    <h1 className='font-nohemi_sb text-3xl pb-3' data-aos="fade-right" data-aos-duration="2000">Heading</h1>
                    <h1 className='font-nohemi_r text-xl w-1/3 text-justify'  data-aos="fade-right" data-aos-duration="2000">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptates nostrum?
                        Amet recusandae porro iure tenetur illo explicabo est accusamus. Consequatur eaque illo
                        dolor soluta fuga quo voluptatem architecto quam. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Corporis, voluptates nostrum? Amet recusandae porro iure tenetur illo
                        explicabo est accusamus.
                    </h1>
                </div>

                <div className='rightside absolute top-[-395px] left-[1000px]'>
                <h1 className='font-nohemi_sb text-3xl pb-3' data-aos="fade-left" data-aos-duration="2000">Heading</h1>

                    <h1 className='font-nohemi_r text-xl w-4/5 text-justify' data-aos="fade-left" data-aos-duration="2000">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia totam autem harum optio
                        numquam magni nihil illum! Dolorem, ut? Et vitae natus magnam, culpa reprehenderit ipsa
                        aut odio veniam ea.
                    </h1>
                </div>
                

            </div>




            <div className="h-[1000px] bg-customCream   z-50">
            <h1 className='pt-10 text-center font-nohemi_m text-[70px]'>
                    Watch Our Video
                </h1>
                                <div className='flex items-center justify-center mb-11 h-[700px]'>
            <iframe width="1060" height="575" src="https://www.youtube.com/embed/RZysj-443-8?si=g_43hioYGF84Yv-S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

        </div>
    );
};

export default Land2;
