import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Pokemon-themed website</h1>
          <nav>
            <Link to="/">Home</Link> <br />
            <Link to="/products">Products</Link> <br />
            <Link to="/about">About</Link> <br />
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
