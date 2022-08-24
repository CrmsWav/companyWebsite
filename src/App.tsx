import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contacts from "./Pages/Contacts/Contacts";
import Team from "./Pages/Team/Team";
import Profile from "./Pages/Profile/Profile";
import Account from "./Pages/Account/Account";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NavBar from "./components/Navbar";
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

        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/accounts/:id" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
