import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavbarHook from "./NavbarHook/NavbarHook";
import Home from "./pages/Home";
import Hubble from './pages/Hubble';
import Mission from "./pages/Mission";
import Explore from "./pages/Explore";

import backgroundImage from "./images/astro copy.png";
import "./App.css"; 

const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh', 
    position: 'relative' 
  };

  return (
    <Router>
      {/* <Navbar /> */}
      <NavbarHook />
      <main className="main-content" style={appStyle}>
        <div className="astrox-content">
        
          <p className="astrox-caption"></p>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Hubble" element={<Hubble />} />
          <Route path="/Missions" element={<Mission />} />

          {/* Define other routes  */}
        </Routes>
        
      </main>
    </Router>
  );
};

export default App;
