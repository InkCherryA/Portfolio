import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import About from './components/intro/about/About';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);