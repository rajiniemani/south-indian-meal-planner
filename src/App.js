// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import MealPlanner from "./MealPlanner";
import Privacy from "./Privacy";
import Contact from "./Contact";
import HealthBenefits from "./HealthBenefits"; // Import the new blog component

const App = () => {
  return (
    <>
      <Helmet>
        {/* Google AdSense script */}
        <script
          data-ad-client="ca-pub-2510038568334237"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Helmet>

      <Router>
        <Routes>
          <Route path="/" element={<MealPlanner />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health-benefits" element={<HealthBenefits />} /> {/* New route for Health Benefits article */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
