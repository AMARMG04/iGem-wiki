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

function App() {
  return (
    <div className="">
      
      <NewNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team_members" element={<TeamMembers />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/notebook" element={<NoteBook />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/protocols" element={<Protocol />} />
        <Route path="/hs" element={<HumanPractices />} />
      </Routes>
      {/* <Mentors /> */}
    </div>
  );
}

export default App;
