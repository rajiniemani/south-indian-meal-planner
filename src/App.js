import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MealPlanner from "./MealPlanner";
import Contact from "./Contact";
import Privacy from "./Privacy";
import HealthBenefits from "./HealthBenefits";

function App() {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-2510038568334237"
        ></script>
      </Helmet>

      <Router>
        <nav style={{ padding: "10px", background: "#f2f2f2", marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/health-benefits" style={{ margin: "0 10px" }}>Health Benefits</Link>
          <Link to="/privacy" style={{ margin: "0 10px" }}>Privacy Policy</Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<MealPlanner />} />
          <Route path="/health-benefits" element={<HealthBenefits />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
