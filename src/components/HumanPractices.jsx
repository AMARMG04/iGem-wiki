import React from 'react';
import Timeline from './TimeLine';
import Cards from './Cards';

const styles = {
  container: {
    width: '100%',
    padding: '0',
    backgroundColor: 'white',
  },
  titleSection: {
    backgroundColor: 'white',
    padding: '60px',
    textAlign: 'center',
  },
  titleH1: {
    fontFamily: `'Nohemi', sans-serif`,
    fontSize: '35px',
    letterSpacing: '8px',
    color: 'black',
    fontWeight: '900',
    textTransform: 'uppercase',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Added text shadow
  },
  titleH3: {
    fontFamily: `'Nohemi', sans-serif`,
    fontSize: '14px',
    lineHeight: '0',
    letterSpacing: '8px',
    textTransform: 'uppercase',
    color: 'black',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Added text shadow
  },
  parallaxSection: (imageUrl) => ({
    paddingTop: '200px',
    paddingBottom: '200px',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }),
  parallaxSectionOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
    zIndex: '1',
  },
  parallaxH2: {
    fontSize: '70px',
    letterSpacing: '10px',
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    textTransform: 'uppercase',
    opacity: '2',
    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)', // Increased shadow size and opacity for a darker effect
    position: 'relative',
    zIndex: '2',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark gray background color with 50% opacity
      backdropFilter: 'blur(5px)', // Add a blur effect to the background
      transition: 'background-color 0.3s ease-in-out', // Add a transition effect to the background color
    },
  },
  
  block: {
    backgroundColor: 'white',
    padding: '60px',
    width: '820px',
    margin: '0 auto',
    textAlign: 'justify',
  },
  firstCharacter: (color) => ({
    fontFamily: `'Nohemi', sans-serif`,
    fontSize: '84px',
    lineHeight: '64px',
    paddingTop: '4px',
    paddingRight: '8px',
    paddingLeft: '3px',
    fontWeight: '400',
    color: color,
  }),
  lineBreak: {
    borderBottom: '1px solid black',
    width: '150px',
    margin: '0 auto',
  },
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
  return (
    
    <div style={styles.container}>
    
      <section style={styles.titleSection}>
        <div className="title">
          {/* <h3 style={styles.titleH3}></h3> */}
          <h1 style={styles.titleH1}>Human Practices</h1>
        </div>
      </section>

      <section>
        <div style={styles.parallaxSection('https://images.unsplash.com/photo-1415018255745-0ec3f7aee47b?dpr=1&auto=format&fit=crop&w=1500&h=938&q=80&cs=tinysrgb&crop=')}>
          <h2 style={styles.parallaxH2}>Project Journey</h2>
        </div>
      </section>

      <section>
        <Timeline />
      </section>
    
      <section>
        <div style={styles.parallaxSection('https://images.unsplash.com/photo-1669101283561-642d16d924ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?dpr=1&auto=format&fit=crop&w=1500&h=600&q=80&cs=tinysrgb&crop=')}>
          <h2 style={styles.parallaxH2}>IGP</h2>
        </div>
      </section>

      <section>
       <Cards/>
       <Cards/>
      </section>

      <section>
        <div style={styles.parallaxSection('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=')}>
          <h2 style={styles.parallaxH2}>ETHICAL CONSIDERATIONS</h2>
        </div>
      </section>

      <section>
        <div style={styles.block}>
         
          <p style={{ ...styles.lineBreak, marginTop: '10px' }}></p>
          <p style={{ marginTop: '10px' }}>
            In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well...
          </p>
         
          <p style={{ ...styles.lineBreak, marginTop: '10px' }}></p>
          <p style={{ marginTop: '10px' }}>
            In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well...
          </p>
        </div>
      </section>

      <section>
        <div style={styles.parallaxSection('https://images.squarespace-cdn.com/content/v1/53dd6676e4b0fedfbc26ea91/1533586373311-1IKA3N05BW349TAZ774M/19464238902_6fd9abb872_k.jpg?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=')}>
          <h2 style={styles.parallaxH2}>PUBLIC ENGAGEMENT</h2>
        </div>
      </section>

      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="relative group">
          <img
            src={card.imageSrc}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
            <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-4 text-center">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </section>

      <section>
        <div style={styles.parallaxSection('https://30a.com/wp-content/uploads/2021/08/Untitled-design-1-2.png?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=')}>
          <h2 style={styles.parallaxH2}>CONCLUSION</h2>
        </div>
      </section>

      <section>
        <div style={styles.block}>
          
        
          <p style={{ marginTop: '10px' }}>
            In 2011, UGG will go back to its roots and focus on bringing the active men that brought the brand to life back with new styles allowing them to love the brand again as well...
          </p>
        </div>
      </section>
    </div>
  );
};

export default HumanPractices;
