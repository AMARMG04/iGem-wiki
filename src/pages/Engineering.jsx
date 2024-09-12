import React from "react";
import Banner from "../components/Banner";
import Cycle from "../components/Cycle";
import NewBanner from "../components/NewBanner"
import Navbar from "../components/Navbar"

const Engineering = () => {
  const content1 = {
    design:
      "Design is the process of envisioning and planning the creation of objects, systems, or solutions.",
    build:
      "Build refers to the process of constructing, assembling, or developing based on a design.",
    test: "Testing involves evaluating the system or components to ensure they meet the requirements and function properly.",
    learn:
      "Learning is the acquisition of knowledge or skills through experience, study, or teaching.",
  };
  return (
    <div className="bg-customCream">
      <Navbar></Navbar>
      <NewBanner title="Engineering" color="customCream" />
      <Cycle content={content1} position="left" title="Cycle 1" />
      <Cycle content={content1} position="right" title="Cycle 2" />
      <Cycle content={content1} position="left" title="Cycle 3" />
      <Cycle content={content1} position="right" title="Cycle 4" />
    </div>
  );
};

export default Engineering;
