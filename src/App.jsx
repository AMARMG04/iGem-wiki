import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import "./globals.css";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
// import Mentors from './components/Mentors'

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team_members" element={<Team />} />
      </Routes>
      {/* <Mentors /> */}
    </div>
  );
}

export default App;
