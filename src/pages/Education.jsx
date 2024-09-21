import React, { useState, useEffect, useRef } from "react";
import NewNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewBanner from "../components/Banner";

const Education = () => {
  const [activeLink, setActiveLink] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null); // State for hovered card
  const sectionsRef = useRef({});
  const [selectedImages, setSelectedImages] = useState({}); // State for selected images

  const handleScroll = (id) => {
    setActiveLink(id);
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 200; // Adjust offset as needed
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const initialSelectedImages = {};
    schools.forEach((school) => {
      initialSelectedImages[school.id] = school.smallImages[0]; // Set the first small image as default
    });
    setSelectedImages(initialSelectedImages);
  }, []);

  const schools = [
    {
      id: 1,
      name: "Greenwood Elementary",
      description: "A nurturing environment for young minds to grow and learn.",
      content: "Greenwood Elementary focuses on providing a comprehensive education, fostering creativity and critical thinking in students. The dedicated staff and vibrant community create an enriching atmosphere where children can thrive.",
      imgSrc: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      smallImages: [
        "https://images.pexels.com/photos/123123/pexels-photo-123123.jpeg",
        "https://images.pexels.com/photos/456456/pexels-photo-456456.jpeg",
        "https://images.pexels.com/photos/789789/pexels-photo-789789.jpeg",
        "https://images.pexels.com/photos/101010/pexels-photo-101010.jpeg",
      ],
    },
    {
      id: 2,
      name: "Riverside High School",
      description: "Preparing students for success in college and beyond.",
      content: "Riverside High School offers a variety of programs aimed at equipping students with the skills and knowledge needed for future success. With a strong emphasis on academics and extracurricular activities, students are encouraged to excel in all areas.",
      imgSrc: "https://images.pexels.com/photos/764682/pexels-photo-764682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      smallImages: [
        "https://images.pexels.com/photos/111111/pexels-photo-111111.jpeg",
        "https://images.pexels.com/photos/222222/pexels-photo-222222.jpeg",
        "https://images.pexels.com/photos/333333/pexels-photo-333333.jpeg",
        "https://images.pexels.com/photos/444444/pexels-photo-444444.jpeg",
      ],
    },
    {
      id: 3,
      name: "Lakeside College",
      description: "A place of higher learning with diverse programs.",
      content: "Lakeside College provides a range of undergraduate and graduate programs designed to foster personal and academic growth. The campus is a vibrant community where students are empowered to pursue their passions and achieve their goals.",
      imgSrc: "https://images.pexels.com/photos/764683/pexels-photo-764683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      smallImages: [
        "https://images.pexels.com/photos/555555/pexels-photo-555555.jpeg",
        "https://images.pexels.com/photos/666666/pexels-photo-666666.jpeg",
        "https://images.pexels.com/photos/777777/pexels-photo-777777.jpeg",
        "https://images.pexels.com/photos/888888/pexels-photo-888888.jpeg",
      ],
    },
  ];

  const handleSmallImageClick = (schoolId, imgSrc) => {
    setSelectedImages((prev) => ({
      ...prev,
      [schoolId]: imgSrc, // Set the selected image for the specific school
    }));
  };

  return (
    <div className="bg-customCream">
      <NewNavbar />
      <NewBanner title="Education" color="blue" />
      <div className="p-10 flex flex-row gap-10 bg-white">
        <div className="p-4 min-w-[300px] h-fit sticky top-28">
          <h1 className="font-nohemi_m mb-4 text-3xl">Schools</h1>
          <ul className="flex flex-col">
            {schools.map((school, index) => (
              <li
                key={school.id}
                className={`flex items-center font-nohemi_r cursor-pointer py-4 ${
                  activeLink === `section-${index}` || hoveredCard === index
                    ? "text-blue-500 border-l-2 border-blue-500 pl-5"
                    : "border-l-2 border-gray-500 text-black pl-5"
                }`}
              >
                <a
                  onClick={() => handleScroll(`section-${index}`)}
                  className="hover:text-blue-500 text-[20px]"
                >
                  {school.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 flex flex-col gap-12 font-nohemi_m w-2/3">
          {schools.map((school, index) => (
            <div
              ref={(el) => (sectionsRef.current[`section-${index}`] = el)}
              id={`section-${index}`}
              key={school.id}
              className={`border border-gray-300 rounded-lg shadow-md p-4 w-full flex flex-col transition-transform duration-200 ease-in-out ${
                activeLink === `section-${index}` ? "outline outline-2 outline-blue-500" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)} 
              onMouseLeave={() => setHoveredCard(null)} 
            >
              <div className="flex-1">
                <h1 className="text-xl border-b-2 text-blue-600 border-blue-600 pb-2">
                  {school.name}
                </h1>
                <img
                  src={selectedImages[school.id]} 
                  alt={school.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-justify text-lg">{school.content}</p>
                <p className="text-justify text-lg">
                  <strong>{school.description}</strong>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {school.smallImages.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`Small ${imgIndex + 1}`}
                    className="w-full h-32 object-cover rounded-md cursor-pointer"
                    onClick={() => handleSmallImageClick(school.id, imgSrc)} // Set the selected image for the specific school
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Education;
