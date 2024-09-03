import React from "react";
import NewNavbar from "../components/NewNavbar";
import World from "../assets/world.png";

const Home = () => {
  return (
    <div className="bg-white h-screen relative">
      {/* <NewNavbar /> */}
      <div className="text-black relative">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-[120px] font-keania">
            MICROPLASTICS
          </h1>
          <img
            src={World}
            alt="World"
            className="w-[650px] h-auto absolute top-[115px]"
          />
        </div>
        <div className="absolute left-24 top-60 p-4 py-6 rounded-xl text-white bg-violet-800 border border-violet-100">
          <h2 className="text-xl font-quick">PLASTIC MANUFACTURED</h2>
          <p className="text-3xl text-center my-2">
            400 Million Tons
          </p>
          <p className="text-right text-3xl"> / year</p>
        </div>
        <div className="absolute left-36 top-[450px] p-4 py-6 rounded-xl text-white bg-violet-800 border border-violet-100">
          <h2 className="text-xl font-quick">PLASTIC MANUFACTURED</h2>
          <p className="text-3xl text-center my-2">
            400 Million Tons
          </p>
          <p className="text-right text-3xl"> / year</p>
        </div>
        <div className="absolute right-24 top-[250px] p-4 py-6 h-80 rounded-xl text-white bg-violet-800 border border-violet-100">
          <h2 className="text-xl font-quick">PLASTIC MANUFACTURED</h2>
          <p className="text-3xl text-center my-2">
            400 Million Tons
          </p>
          <p className="text-right text-3xl"> / year</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
