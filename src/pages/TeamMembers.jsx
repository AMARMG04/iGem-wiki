import React from "react";
import Carousel from "../components/Carousel";
import {team_members} from "../data/team"

const TeamMembers = () => {
  console.log(team_members)
  return (
   <Carousel team_members={team_members}/>
  );
};

export default TeamMembers;
