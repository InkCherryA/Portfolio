import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/intro/about/About';
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Topbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);