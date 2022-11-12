import { Route, Routes } from 'react-router-dom';
import './App.css';
import MenFashion from './Pages/Home/Fashion/MenFashion';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menfashion" element={<MenFashion />} />
      </Routes>
    </div>
  );
}

export default App;
