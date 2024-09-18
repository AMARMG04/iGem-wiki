import React, { useEffect } from 'react';
import Timeline from './TimeLine';
import Cards from './Cards';
import Nav from './NewNavbar';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import scrollingImage from '../assets/polic.png'; 
import additionalImage1 from '../assets/bottle.webp'; 
import additionalImage2 from '../assets/bottle.webp'; 
import NewBanner from './NewBanner';
import Footer from './Footer';

// Extracted Parallax Section as a separate component
const ParallaxSection = ({ imageUrl, title }) => {
  return (
    <div
      className="relative w-full py-52 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
      data-scroll
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h2 className="relative z-10 text-white text-6xl font-bold uppercase text-center tracking-widest drop-shadow-lg"
          data-scroll
          data-scroll-speed="2">
        {title}
      </h2>
    </div>
  );
};

const cards = [
  {
    imageSrc: 'https://via.placeholder.com/300',
    description: 'Description for Image 1',
  },
  {
    imageSrc: 'https://via.placeholder.com/300',
    description: 'Description for Image 2',
  },
  {
    imageSrc: 'https://via.placeholder.com/300',
    description: 'Description for Image 3',
  },
];

const HumanPractices = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      <Nav />
      <div className="bg-white">
        {/* Title Section */}
        <section className="text-center py-20" data-scroll>
       <NewBanner title="Human Practices" color="customCream" />
        </section>

        {/* Parallax Section - Project Journey */}
        <ParallaxSection
          imageUrl="https://images.unsplash.com/photo-1415018255745-0ec3f7aee47b?dpr=1&auto=format&fit=crop&w=1500&h=938&q=80&cs=tinysrgb&crop="
          title="Project Journey"
        />

        {/* Moving Image in Different Locations */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-1/4" data-scroll data-scroll-speed="1">
            <img
              src={scrollingImage}
              alt="Scrolling"
              className="w-full"
              data-scroll
              data-scroll-speed="2"
            />
          </div>
          <div className="absolute bottom-1/4 right-10 w-1/4" data-scroll data-scroll-speed="1">
            <img
              src={additionalImage1}
              alt="Additional Image 1"
              className="w-full"
              data-scroll
              data-scroll-speed="3"
            />
          </div>
          <div className="relative z-10 h-48">
            
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <Timeline />
        </section>

        {/* Parallax Section - IGP */}
        <ParallaxSection
          imageUrl="https://images.unsplash.com/photo-1669101283561-642d16d924ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?dpr=1&auto=format&fit=crop&w=1500&h=600&q=80&cs=tinysrgb&crop="
          title="IGP"
        />

        {/* Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 bg-white">
          {cards.map((card, index) => (
            <div key={index} className="relative group" data-scroll>
              <img
                src={card.imageSrc}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-scroll
                data-scroll-speed="1"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 ease-in-out rounded-lg flex items-center justify-center"
                   data-scroll
                   data-scroll-speed="1">
                <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-4 text-center">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Parallax Section - Ethical Considerations */}
        <ParallaxSection
          imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop="
          title="Ethical Considerations"
        />

        {/* Text Block Section */}
        <section className="max-w-4xl mx-auto px-6 py-10" data-scroll>
          <div className="border-b border-black w-36 mx-auto my-6"></div>
          <p className="text-justify">
            In 2011, UGG will go back to its roots and focus on bringing the
            active men that brought the brand to life back with new styles
            allowing them to love the brand again as well...
          </p>
          <div className="border-b border-black w-36 mx-auto my-6"></div>
          <p className="text-justify">
            In 2011, UGG will go back to its roots and focus on bringing the
            active men that brought the brand to life back with new styles
            allowing them to love the brand again as well...
          </p>
        </section>

        {/* Parallax Section - Public Engagement */}
        <ParallaxSection
          imageUrl="https://30a.com/wp-content/uploads/2021/08/Untitled-design-1-2.png?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop="
          title="Public Engagement"
        />

        {/* Cards Section Again */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
          {cards.map((card, index) => (
            <div key={index} className="relative group" data-scroll>
              <img
                src={card.imageSrc}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-scroll
                data-scroll-speed="1"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 ease-in-out rounded-lg flex items-center justify-center"
                   data-scroll
                   data-scroll-speed="1">
                <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-4 text-center">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Parallax Section - Conclusion */}
        <ParallaxSection
          imageUrl="https://images.squarespace-cdn.com/content/v1/53dd6676e4b0fedfbc26ea91/1533586373311-1IKA3N05BW349TAZ774M/19464238902_6fd9abb872_k.jpg?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop="
          title="Conclusion"
        />

        {/* Conclusion Text Block */}
        <section className="max-w-4xl mx-auto px-6 py-10" data-scroll>
          <p className="text-justify">
            In 2011, UGG will go back to its roots and focus on bringing the
            active men that brought the brand to life back with new styles
            allowing them to love the brand again as well...
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default HumanPractices;
