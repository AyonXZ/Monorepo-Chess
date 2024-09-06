
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './screens/Landing';
import { Game } from './screens/Game';
import { Signup } from './screens/Signup';

function App() {
  return (
    <div className='h-screen'>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/game" element={<Game />} /> 
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
