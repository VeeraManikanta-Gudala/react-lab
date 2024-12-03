

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculator from './pages/Calculator';
import Voting from './pages/Voting';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

function App() {
  return (
  <Router>
  <div>
  <h1>Lab Program</h1>
  <nav>
  <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/Calculator">Calculator</Link></li>
  <li><Link to="/Voting">Voting</Link></li>
  </ul>
  </nav>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Calculator" element={<Calculator />} />
  <Route path="/Voting" element={<Voting />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
  </div>
  </Router>
  );
  }

  export default App;