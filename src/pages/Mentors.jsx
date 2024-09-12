import React from "react";
import Carousel from "../components/Carousel";
import { mentors } from "../data/mentors";
import NewBanner from "../components/NewBanner";
import Navbar from "../components/Navbar";

const Mentors = () => {
  return (
    <div className="bg-customCream">
      <Navbar></Navbar>
      <NewBanner title="Mentors" color="customCream" />
      <Carousel team_members={mentors} />
    </div>
  );
};

export default Mentors;
