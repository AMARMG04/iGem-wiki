import React from 'react';

const HumanPractices = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
   
      <header className="bg-blue-900 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">iGEM Human Practices</h1>
          <nav className="mt-4">
            <a href="#project-journey" className="mr-4 hover:underline">Project Journey</a>
            <a href="#integrated-human-practices" className="mr-4 hover:underline">Integrated Human Practices</a>
            <a href="#expert-consultations" className="mr-4 hover:underline">Expert Consultations</a>
            <a href="#ethical-considerations" className="mr-4 hover:underline">Ethical Considerations</a>
            <a href="#public-engagement" className="mr-4 hover:underline">Public Engagement</a>
            <a href="#conclusion" className="hover:underline">Conclusion</a>
          </nav>
        </div>
      </header>

      
      <main className="container mx-auto py-8">
        
        <section id="project-journey" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Project Journey</h2>
          <p className="mt-4 text-gray-600">
            In this section, detail the development process of your project, highlighting key decision points influenced by expert advice, stakeholder feedback, and ethical considerations.
          </p>
          {/* Add more content here */}
        </section>

      
        <section id="integrated-human-practices" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Integrated Human Practices</h2>
          <p className="mt-4 text-gray-600">
            Discuss how human practices were integrated into the core of your project, including understanding the problem, defining a solution, and how this influenced the project.
          </p>
         
        </section>

       
        {/* <section id="expert-consultations" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Expert Consultations</h2>
          <p className="mt-4 text-gray-600">
            Provide a summary of the consultations with various experts that guided the project adjustments, especially in terms of ethics, sustainability, and societal impact.
          </p>
         
        </section> */}

        {/* Ethical Considerations */}
        <section id="ethical-considerations" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Ethical Considerations</h2>
          <p className="mt-4 text-gray-600">
            Discuss the ethical guidelines your team followed, the importance of transparency, public engagement, and the potential risks and benefits of your project.
          </p>
       
        </section>

        {/* Public Engagement */}
        <section id="public-engagement" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Public Engagement</h2>
          <p className="mt-4 text-gray-600">
            Describe your efforts to engage with the public and stakeholders, including workshops, surveys, and collaborations.
          </p>
         
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
          <p className="mt-4 text-gray-600">
            Summarize the impact of integrating human practices into your project, reflecting on how these practices have strengthened your project’s relevance and potential for real-world application.
          </p>
       
        </section>
      </main>

      
    </div>
  );
};

export default HumanPractices;
