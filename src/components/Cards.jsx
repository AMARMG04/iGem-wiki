import React from 'react';

// Sample data for the cards
const cardData = {
  main: {
    image: "https://via.placeholder.com/300",
    sections: [
      {
        title: "Who did we address and why?",
        content: "We got in touch with Dr. Giorgos Zalidis, Professor Agricultural Science Department of Aristotle University of Thessaloniki who specializes in soil science."
      },
      {
        title: "What was the subject of discussion?",
        content: "Our goal was to identify the most serious issue that forest soils face following a fire. In our conversation, he pointed out that some major issues after a fire are the lack of organic matter and the increased hydrophobicity of the soil. More specifically, organic matter gets destroyed since it is one of the top layers of the soil, which makes it more prone to getting burned. At the same time, the contact angle between the soil and the water changes, removing its ability to absorb large amounts of water, which heightens the hazard of soil desertification. We were informed that ionic resins in the form of spray are currently being used to reduce the latter problem."
      },
      {
        title: "How have we incorporated their feedback?",
        content: "With Dr Zalidis knowledge, we had acquired the guidance we needed to continue our research and construct an idea that would efficiently solve the most crucial issues forests are facing after a wildfire. With the information he gave us about the ionic resins, we began bibliographic research in order to find a more effective alternative."
      }
    ]
  },
  projectUpdate: {
    title: "Project update",
    content: "From now on, our primary literature interest will be a synthetic-biology solution to the burned soil's hydrophobicity. The water-runoff increases the danger of soil erosion and, finally, the desertification of forest ecosystems. The initial phase of our project involved developing a hydrogel-forming biopolymer to ensure water absorption. Then we looked into the soil's requirements in terms of nutrients that are lost."
  }
};

const MainCard = ({ image, sections }) => {
  return (
    <div className="flex mb-6 border rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt="Dr. Giorgos Zalidis" className="w-1/3 object-cover" />
      <div className="w-2/3 p-6">
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold mb-2">{section.title}</h3>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectUpdateCard = ({ title, content }) => {
  return (
    <div className="mb-6 border rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="p-6">
      <MainCard
        image={cardData.main.image}
        sections={cardData.main.sections}
      />
      <ProjectUpdateCard
        title={cardData.projectUpdate.title}
        content={cardData.projectUpdate.content}
      />
    </div>
  );
};

export default Cards;
