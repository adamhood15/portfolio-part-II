import React from "react";
export default function Header({ setActivePage, activePage }) {

  let navigation = ["About", "Portfolio", "Resume", "Contact"];
  let colors = ['#657ED4', '#2c2c2c', '#f85e5e', '#00db49']

  function renderPage(i) {
    setActivePage(i.target.text);

    document.getElementById(activePage).style.textDecoration = `none`;

    let currentPage = i.target.style.textDecoration

    i.target.text === "About" ? currentPage = `underline #657ED4` 
    : i.target.text === "Portfolio" ? currentPage = `underline #2c2c2c`
    : i.target.text === "Resume" ? currentPage = `underline #f85e5e`
    : currentPage = `underline #00db49`
    
    return activePage;
  }


  function renderNav() {
    return navigation.map((item, i) => {
      let link = `#${item.toLowerCase()}`;

      return (
        <li key={i} className="nav-item">
          <a className="nav-link" id={item} key={i} href={link} onClick={renderPage}>
            {item}
          </a>
        </li>
      );
    });
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <a id="name" className="navbar-brand" href="#home">
           Adam Hood 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {renderNav()}
          </ul>
        </div>
      </nav>
    </>
  );
  
}
