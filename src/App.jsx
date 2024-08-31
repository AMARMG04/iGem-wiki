import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import './globals.css'
import Team from './pages/Team'

function App() {


  return (
    <div className='p-6'>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team_members" element={<Team />} />
    </Routes>
    </div>
  )
}

export default App
