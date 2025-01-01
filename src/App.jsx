import React from 'react';
import Footer from './Components/Footer.jsx';

import About from './About.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center font-merriweather text-red-950 flex flex-col items-center space-y-4" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
        <nav className="fixed top-1 left-2 w-full z-10 p-4">
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/contact">Contact </Link>
          <a href="https://www.soundcloud.com/arptucson" target="_blank">FlipSide</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
