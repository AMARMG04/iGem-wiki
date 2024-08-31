import React from "react";
import MentorImg from "../assets/mentor.png"
const teachers = [
  {
    name: "Dr. Evelyn Scott",
    position: "Assistant Professor, Dept. of Bioengineering at REC",
    description:
      "Evelyn Scott is a leading figure in the field of synthetic biology, with a background in molecular biology and genetics. She has been a key contributor to the development of various genetic circuits, such as the E. coli K12 substrate-specific promoter-enhancer system (ESPRS), and has led the development of the human T-cell receptor (TCR) gene therapy platform, PROTEUS. As the PI, Evelyn has been instrumental in ensuring that our team is well-equipped to tackle the complex challenges of synthetic biology, providing support, and ensuring that the research is conducted safely and ethically. PROTEUS would not have been possible without her support.",
  },
  {
    name: "Dr. Evelyn Scott",
    position: "Assistant Professor, Dept. of Bioengineering at REC",
    description:
        "Evelyn Scott is a leading figure in the field of synthetic biology, with a background in molecular biology and genetics. She has been a key contributor to the development of various genetic circuits, such as the E. coli K12 substrate-specific promoter-enhancer system (ESPRS), and has led the development of the human T-cell receptor (TCR) gene therapy platform, PROTEUS. As the PI, Evelyn has been instrumental in ensuring that our team is well-equipped to tackle the complex challenges of synthetic biology, providing support, and ensuring that the research is conducted safely and ethically. PROTEUS would not have been possible without her support.",
  },
  { 
        name: "Dr. Evelyn Scott",
    position: "Assistant Professor, Dept. of Bioengineering at REC",
    description:
          "Evelyn Scott is a leading figure in the field of synthetic biology, with a background in molecular biology and genetics. She has been a key contributor to the development of various genetic circuits, such as the E. coli K12 substrate-specific promoter-enhancer system (ESPRS), and has led the development of the human T-cell receptor (TCR) gene therapy platform, PROTEUS. As the PI, Evelyn has been instrumental in ensuring that our team is well-equipped to tackle the complex challenges of synthetic biology, providing support, and ensuring that the research is conducted safely and ethically. PROTEUS would not have been possible without her support.",

  }
]
function Mentors() {
  return (

    <section className="mt-10" data-aos="zoom-out">
          
      <h1 className="text-[50px] font-semibold p-10">Principal Investigators</h1>
      {
      teachers.map((teacher,index) => (
    <div className="mentor mb-16  lg:flex">
      <div className=" w-2/5 flex  items-center justify-center ">
        <img src={MentorImg} className="w-80" alt="" />
      </div>
      
          <div className="w-3/5" key={index}>

<h1 className="text-[50px] mb-10">{teacher.name}</h1>
<h3 className="font-medium mb-6">{teacher.position}</h3>
<h4 className="p-4 ">{teacher.description}</h4>
</div>
</div>
        ))
      }

      
    
    </section>
  );
}

export default Mentors;