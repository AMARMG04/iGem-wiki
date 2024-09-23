import React from "react";

const Timeline1 = () => {
  const events = [
    {
      date: "2 December",
      timeline: [
        { time: "9:00 AM", description: "Life finds a way. You know what? It is beets." },
        { time: "10:00 AM", description: "I've crashed into a beet truck." },
        { time: "12:30 AM", description: "I was part of something special." },
        { 
          time: "13:30 PM", 
          description: "Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.", 
          image: "https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" 
        },
        { time: "14:30 PM", description: "Just my luck, no ice. God help us, we're in the hands of engineers." },
        { time: "15:30 PM", description: "I gave it a cold? I gave it a virus. A computer virus." },
        { time: "16:30 PM", description: "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs." },
        { 
          time: "17:30 PM", 
          description: "What do they got in there? King Kong?", 
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg" 
        },
      ],
    },
    {
      date: "3 January",
      timeline: [
        { time: "9:00 AM", description: "Life finds a way. You know what? It is beets." },
        { time: "10:00 AM", description: "I've crashed into a beet truck." },
        { time: "12:30 AM", description: "I was part of something special." },
        { 
          time: "13:30 PM", 
          description: "Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.", 
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg/1200px-Eiffel_tower_at_Exposition_Universelle%2C_Paris%2C_1889.jpg" 
        },
        { time: "14:30 PM", description: "Just my luck, no ice. God help us, we're in the hands of engineers." },
        { time: "15:30 PM", description: "I gave it a cold? I gave it a virus. A computer virus." },
        { time: "16:30 PM", description: "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs." },
        { 
          time: "17:30 PM", 
          description: "What do they got in there? King Kong?", 
          image: "https://images.fineartamerica.com/images-medium-large-5/maroon-bells-aspen-colorado-black-and-white-photography-by-sai.jpg" 
        },
      ],
    },
  ];

  return (
    <main className="max-w-5xl mx-auto p-8 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8">Events</h1>

      {events.map((event, eventIndex) => (
        <section key={eventIndex} className="mb-12">
          <h2 className="text-xl font-semibold text-red-400 mb-4">{event.date}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {event.timeline.map((item, index) => (
              <article
                key={index}
                className={`p-4 border-b border-gray-500 ${
                  (index + 1) % 4 === 0 ? "lg:col-span-2 lg:row-span-3" : ""
                }`}
              >
                <h3 className="text-lg font-semibold mb-2">{item.time}</h3>
                <p className="mb-2">{item.description}</p>
                {item.image && (
                  <img
                    src={item.image}
                    alt="Event visual"
                    className="w-full rounded-lg mt-2"
                  />
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Timeline1;
