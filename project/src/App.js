import React, { useState, useEffect } from 'react';

import './App.css';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

function App() {
  const [pageChange, setPageChange] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageChange(false);
    }, 1500);
  }, []);

  return (
    <Router>
      <div className="App">
        {pageChange ? (
          <LandingPage />
        ) : (
          <>
            <Header />
            <div className="HomePageMainCon">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
            </>
        )}
      </div>
    </Router>
  );
}

export default App;
