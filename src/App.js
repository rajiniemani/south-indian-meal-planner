import { Helmet } from 'react-helmet';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealPlanner from "./MealPlanner";
import Privacy from "./Privacy";
import Contact from "./Contact";

function App() {
  return (
      <Helmet>
       <script
         data-ad-client="ca-pub-2510038568334237"
         async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Helmet>
      {<Router>
      <Routes>
        <Route path="/" element={<MealPlanner />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>}
    </>
  );
}

export default App;
