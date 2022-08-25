import React from 'react';
import {Routes, Route} from 'react-router-dom';

import NavBar from "./components/Navbar";

import Home from './Pages/Home/Home';
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Team from "./Pages/Team/Team";
import Contacts from "./Pages/Contacts/Contacts";

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
