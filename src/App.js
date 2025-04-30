import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MealPlanner from "./MealPlanner";
import Contact from "./Contact";
import Privacy from "./Privacy";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MealPlanner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
