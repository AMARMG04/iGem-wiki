import React from "react";
import LinkedIn from "../assets/image.png";
import Carousel from "../components/Carousel";

const TeamMembers = () => {
  const team_members = [
    {
      name: "Lucy",
      role: "Dry Lab Lead",
      image: "/src/assets/signe.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
    },
    {
      name: "Lucy",
      role: "Dry Lab Lead",
      image: "/src/assets/signe.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
    },
    {
      name: "Lucy",
      role: "Dry Lab Lead",
      image: "/src/assets/signe.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
    },
    {
      name: "Lucy",
      role: "Dry Lab Lead",
      image: "/src/assets/signe.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde recusandae hic possimus ratione sapiente placeat accusamus voluptatibus, nulla, expedita cumque enim maiores praesentium perspiciatis officia in tenetur! Sint, veniam illo.",
    },
  ];

  return (
   <Carousel team_members={team_members}/>
  );
};

export default TeamMembers;
