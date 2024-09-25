import React from "react";
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

  `;
  return (
    <div className="bg-sky-100">
      <div>
        <h1
          className="mb-[550px] pt-[120px] text-center font-nohemi_m text-[70px]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          How Does It Affect The Land
        </h1>
      </div>

      <div className="relative">
        <div>
          <img src={BrownWave} className="w-full" alt="" />
          <div className="h-[400px] bg-brown"></div>
        </div>
        <style>{style}</style>

        <div className="absolute bottom-[160px] left-[40%]">
          <div className="relative">
            <img src={Plant} className="w-[300px]" alt="" />

            <div className="z-50 rounded-full absolute right-[0px] bottom-[100px] bg-red-600 w-[9px] h-[15px] float-northwest"></div>
            <div className="z-50 rounded-full absolute left-[0px] bottom-[100px] bg-yellow-600 w-[9px] h-[15px] float-northeast"></div>
            <div className="z-50 rounded-full absolute right-[50px] bottom-[0px] bg-orange-600 w-[9px] h-[15px]  float-northwest"></div>
            <div className="z-50 rounded-full absolute left-[30px] bottom-[40px] bg-green-600 w-[9px] h-[15px]  float-northeast"></div>
            <div className="z-50 rounded-full absolute right-[120px] bottom-[-30px] bg-red-600 w-[9px] h-[15px]  float-northwest"></div>
            <div className="z-50 rounded-full absolute right-[190px] bottom-[-30px] bg-yellow-600 w-[9px] h-[15px]  float-northwest"></div>
            <div className="z-50 rounded-full absolute left-[0px] bottom-[-30px] bg-red-600 w-[9px] h-[15px]  float-northeast "></div>

            <div className="z-50 rounded-full absolute left-[-90px] bottom-[30px] bg-green-600 w-[9px] h-[15px] float-northeast"></div>
            <div className="z-50 rounded-full absolute right-[-90px] bottom-[30px] bg-red-600 w-[9px] h-[15px]  float-northwest"></div>
            <div className="z-50 rounded-full absolute right-[-60px] bottom-[-30px] bg-red-600 w-[9px] h-[15px]  float-northwest"></div>
            <div className="z-50 rounded-full absolute left-[-40px] bottom-[30px] bg-red-600 w-[9px] h-[15px]  float-northeast"></div>
            <div className="z-50 rounded-full absolute right-[-40px] bottom-[30px] bg-red-600 w-[9px] h-[15px]  float-northwest"></div>
            <div className="z-50 rounded-full absolute left-[140px] bottom-[90px] bg-yellow-600 w-[9px] h-[15px] float-northeast"></div>
            <div className="z-50 rounded-full absolute left-[180px] bottom-[120px] bg-red-600 w-[9px] h-[15px] float-northeast"></div>
            <div className="z-50 rounded-full absolute left-[150px] bottom-[180px] bg-green-600 w-[9px] h-[15px] float-northeast"></div>

            <div className="z-50 rounded-full absolute left-[80px] bottom-[150px] bg-orange-600 w-[9px] h-[15px]  float-northeast"></div>
            <div className="z-50 rounded-full absolute right-[80px] bottom-[150px] bg-red-400 w-[9px] h-[15px] float-northwest"></div>
            <div className="z-50 rounded-full absolute left-[150px] bottom-[240px] bg-yellow-600 w-[9px] h-[15px]  float-northeast"></div>
            <div className="z-50 rounded-full absolute left-[157px] bottom-[280px] bg-orange-600 w-[9px] h-[15px] floating"></div>
            <div className="z-50 rounded-full absolute left-[158px] bottom-[360px] bg-red-600 w-[9px] h-[15px] floating"></div>
            <div className="z-50 rounded-full absolute left-[156px] bottom-[470px] bg-yellow-600 w-[9px] h-[15px] floating"></div>

            <div className="z-50 rounded-full absolute left-[156px] bottom-[570px] bg-green-600 w-[9px] h-[15px] floating"></div>
            <div className="z-50 rounded-full absolute left-[156px] bottom-[670px] bg-red-600 w-[9px] h-[15px] floating"></div>
            <div className="z-50 rounded-full absolute left-[116px] bottom-[520px] bg-yellow-600 w-[9px] h-[15px] float-northwest"></div>

            <div className="z-50 rounded-full absolute right-[116px] bottom-[530px] bg-red-400 w-[6px] h-[11px] float-northeast"></div>
            <div className="z-50 rounded-full absolute right-[116px] bottom-[760px] bg-red-600 w-[6px] h-[11px] float-northeast"></div>
            <div className="z-50 rounded-full absolute left-[116px] bottom-[760px] bg-yellow-600 w-[6px] h-[11px]  floating"></div>
          </div>
        </div>

        <div className="absolute top-[-400px] ml-12">
      
          <h1
            className="font-nohemi_r  text-[25px] w-1/3 text-justify"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
Microplastics contaminate soil through fertilizers, sewage sludge, and wastewater, eventually entering our food supply through crops          </h1>
        </div>

        <div className="rightside absolute top-[-395px] left-[1000px]">
      

          <h1
            className="font-nohemi_r text-[25px]  w-4/5 text-justify"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
        Bringing these invisible pollutants straight to our plates. 
Moving from plant to human body

          </h1>
        </div>
      </div>

      <div className="bg-hero-bg bg-cover bg-center z-50">
        <div className="backdrop-blur-lg bg-black/40 py-10">
          <h1 className="pt-10 text-center text-white font-nohemi_m text-[70px]">
            Watch Our Promo
          </h1>
          <div className="flex items-center justify-center h-[700px]">
            <iframe
              title="REC-CHENNAI: PLASTICOPS (2024) - Project Promotion [English]"
              width="1060"
              height="575"
              src="https://video.igem.org/videos/embed/6bc8b833-a6c5-4b16-b6ee-167e7502b7d6"
              frameborder="0"
              allowfullscreen=""
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Land2;
