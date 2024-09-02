import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import "./globals.css";
import Team from "./pages/Team";
import Team2 from "./pages/Team2";

import Navbar from "./components/Navbar";
import NoteBook from "./pages/NoteBook";
import TeamMembers from "./pages/TeamMembers";
// import Mentors from './components/Mentors'

function App() {
  return (
    <div className="m-10 scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team_members" element={<TeamMembers />} />
        <Route path="/notebook" element={<NoteBook />} />
        <Route path="/team2" element={<Team2 />} />

      </Routes>
      {/* <Mentors /> */}
    </div>
  );
}

export default App;
