import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import './App.css'

function App() {

  return (
    <Router>
      <div className="font-merriweather 
      flex flex-col 
      items-center space-y-4">
        <nav>
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/contact">Contact </a>
          <a href="https://www.soundcloud.com/arptucson" target="_blank">FlipSide</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
