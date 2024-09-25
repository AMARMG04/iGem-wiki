import React from 'react';
import NewNavbar from '../components/Navbar';

const Game = () => {
  return (
    <>    <NewNavbar/>
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="bg-white w-full rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://igem-plasticop.netlify.app"
          width="100%   "
          height="760px"
          style={{ border: 'none' }}
          title="Game"
        ></iframe>
      </div>
    </div>
    </>

  );
}

export default Game;
