import React from "react";
import Fullpage from "@fullpage/react-fullpage";
import scrollHorizontally from 'fullpage.js/vendors/scroll-horizontally';

const Carousel = () => {
  const slides = [
    {
      title: "Slide 1",
      content: "This is the content for slide 1",
    },
    {
      title: "Slide 2",
      content: "This is the content for slide 2",
    },
    {
      title: "Slide 3",
      content: "This is the content for slide 3",
    },
    // Add more slides as needed
  ];

  return (
    <Fullpage
      licenseKey={"YOUR_KEY"}
      scrollingSpeed={1000}
      controlArrows={true}
      slidesNavigation={true}
      sectionsColor={["#f2f2f2", "#4BBFC3", "#7BAABE", "#f90"]}
      scrollHorizontally={true}  // Enable the scroll horizontally plugin
      plugins={[scrollHorizontally]}  // Add the scroll horizontally plugin
      render={({ fullpageApi }) => (
        <div>
          <div className="section">
            {slides.map((slide, index) => (
              <div className="slide" key={index}>
                <h2>{slide.title}</h2>
                <p>{slide.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    />
  );
};

export default Carousel;
