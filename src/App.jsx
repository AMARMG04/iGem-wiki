import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Protocol from "./components/Protocol"
// import Navbar from "./components/Navbar";
import NoteBook from "./pages/NoteBook";
import Parts from "./pages/Parts";
import Mentors from './pages/Mentors'
import TeamMembers from "./pages/TeamMembers";
import HumanPractices from "./pages/ihp";
// import NewNavbar from "./components/NewNavbar";

import CircleTrail from "./components/CircleTrail";

import Footer from "./components/Footer"
import Cycle from "./components/Cycle";
import NewHome from "./pages/NewHome";
import ProjectDescription from "./pages/ProjectDescription"
import Engineering from "./pages/Engineering";
import Sustainability from "./pages/Sustainability"


function App() {
  return (
    <div className=" h-full ">
      <CircleTrail/>
      {/* <NewNavbar /> */}
      <Routes>
      <Route path="/home" element={<NewHome />} />

        <Route path="/" element={<Home />} />
        <Route path="/team_members" element={<TeamMembers />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/notebook" element={<NoteBook />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/protocols" element={<Protocol />} />
        <Route path="/ihp" element={<HumanPractices />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/project_description" element={<ProjectDescription />} />
        <Route path='/sustainability' element={<Sustainability/>} />

      </Routes>
      <Footer />
      {/* <Mentors /> */}
    </div>
  );
}

export default App;
