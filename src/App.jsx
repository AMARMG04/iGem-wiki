import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Protocol from "./components/Protocol"
// import Navbar from "./components/Navbar";
import NoteBook from "./pages/NoteBook";
import Parts from "./pages/Parts";
import Mentors from './pages/Mentors'
import TeamMembers from "./pages/TeamMembers";
import HumanPractices from "./components/HumanPractices";
import NewNavbar from "./components/NewNavbar";

import CircleTrail from "./components/CircleTrail";

import Footer from "./components/Footer"
import Cycle from "./components/Cycle";
import TextGSAP from "./components/Text/TextGSAP";


function App() {
  return (
    <div className="bg-black h-full">
      <CircleTrail/>
      <NewNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team_members" element={<TeamMembers />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/notebook" element={<NoteBook />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/protocols" element={<Protocol />} />
        <Route path="/hs" element={<HumanPractices />} />
        <Route path="/cycle" element={<Cycle />} />
        <Route path="/text" element={<TextGSAP />} />
      </Routes>
      <Footer />
      {/* <Mentors /> */}
    </div>
  );
}

export default App;
