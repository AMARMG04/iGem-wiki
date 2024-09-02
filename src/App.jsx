import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import "./globals.css";
import Team from "./pages/Team";
import Team2 from "./pages/Team2";
import Protocol from "./components/Protocol"
import Navbar from "./components/Navbar";
import NoteBook from "./pages/NoteBook";
import Parts from "./pages/Parts";
// import Mentors from './components/Mentors'

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team_members" element={<Team />} />
        <Route path="/notebook" element={<NoteBook />} />
        <Route path="/team2" element={<Team2 />} />

        <Route path="/parts" element={<Parts />} />
        <Route path="/protocols" element={<Protocol />} />

      </Routes>
      {/* <Mentors /> */}
    </div>
  );
}

export default App;
