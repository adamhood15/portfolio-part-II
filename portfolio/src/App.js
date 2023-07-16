import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  const [pages] = useState([
    { name: "about" },
    { name: "portfolio" },
    { name: "resume" },
    { name: "contact" },
  ]);

  const [activePage, setActivePage] = useState(pages[2]);

  return (
    <div className="portfolio-app">
      <Header
        pages={pages}
        setActivePage={setActivePage}
        activePage={activePage}
      />

      <Navigation
        pages={pages}
        setActivePage={setActivePage}
        activePage={activePage}
      />
      <Footer />
    </div>
  );
}

export default App;
