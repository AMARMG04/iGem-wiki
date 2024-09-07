import React from 'react';
// import "./home.scss"
const NewHome = () => {

  const glowStyle = `
    .glow1 {
      animation: glowRed 1s ease-in-out infinite alternate;
    }

    @keyframes glowRed {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px red, 0 0 40px red, 0 0 50px red, 0 0 60px red, 0 0 70px red;
      }
      to {
        text-shadow: 0 0 20px #fff, 0 0 30px red, 0 0 40px red, 0 0 50px red, 0 0 60px red, 0 0 70px red, 0 0 80px red;
      }
    }

    .glow2 {
      animation: glowBlue 1s ease-in-out infinite alternate;
    }

    @keyframes glowBlue {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px blue, 0 0 40px blue, 0 0 50px blue, 0 0 60px blue, 0 0 70px blue;
      }
      to {
        text-shadow: 0 0 20px #fff, 0 0 30px blue, 0 0 40px blue, 0 0 50px blue, 0 0 60px blue, 0 0 70px blue, 0 0 80px blue;
      }
    }
  `;

  return (
    <div>
      <style>{glowStyle}</style>
      
      {/* <div className='flex justify-center items-center h-[calc(100vh-170px)]'> */}
        <h1 className='text-center text-white font-bold text-[100px] font-keania'>
          <span className='glow1'>PLAST</span><span className='glow2'>ICOPS</span>
        </h1>
      {/* </div> */}
    </div>
  );
}

export default NewHome;
