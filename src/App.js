import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {

  const [activePage, setActivePage] = useState("About");

  return (
    <div className="portfolio-app">
      <Header
        setActivePage={setActivePage}
        activePage={activePage}
      />

      <Navigation
        setActivePage={setActivePage}
        activePage={activePage}
      />
      <Footer />
    </div>
  );
}

export default App;
