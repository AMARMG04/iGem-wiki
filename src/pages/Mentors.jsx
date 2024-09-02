import React from "react";
import Carousel from "../components/Carousel";
import {mentors} from "../data/mentors"

const Mentors = () => {
  return (
   <Carousel team_members={mentors}/>
  );
};

export default Mentors;
