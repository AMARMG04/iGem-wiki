import React, { useEffect } from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import BirdBanner from './BirdBanner';
import Timeline1 from './TimeLine1';
import Timeline2 from './TimeLine2';





const HumanPractices = () => {
 

  return (
    <div data-scroll-container className="font-nohemi_m">
      <Nav />
      <div className="bg-white">
        {/* Title Section */}
        
        <section className="text-center" data-scroll>
          
       <BirdBanner title="Integrated Human Practices"/>
        </section>
<Timeline2/>

      
      <Footer/>
    </div>
    </div>
  );
};

export default HumanPractices;
