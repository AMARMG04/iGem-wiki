import React from "react";
import Carousel from "../components/Carousel";
import { team_members } from "../data/team";
import NewBanner from "../components/NewBanner";
import Navbar from "../components/Navbar";

const TeamMembers = () => {
  console.log(team_members);
  return (
    <div className="bg-customCream">
      <Navbar></Navbar>
      <NewBanner title="Team Members" color="customCream" />
      <Carousel team_members={team_members} />
    </div>
  );
};

export default TeamMembers;
