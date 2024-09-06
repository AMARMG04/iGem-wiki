import React from "react";
import Carousel from "../components/Carousel";
import {team_members} from "../data/team"
import Banner from "../components/Banner";

const TeamMembers = () => {
  console.log(team_members)
  return (
    <div className="bg-customCream">
      <Banner title="Team Members" />
   <Carousel team_members={team_members}/>
   </div>
  );
};

export default TeamMembers;
