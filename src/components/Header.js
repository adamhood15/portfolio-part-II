import React from "react";
export default function Header({ setActivePage, activePage }) {

  let navigation = ["About", "Portfolio", "Resume", "Contact"];

  function renderPage(i) {
    setActivePage(() => i.target.text);
   
    console.log(i.target.text);
    console.log(activePage);
    document.getElementById(activePage).style.textDecoration = `none`;

    if (i.target.text === "About") {
    i.target.style.textDecoration = `underline 2px #657ED4`;
    } else if (i.target.text === "Portfolio") {
      i.target.style.textDecoration = `underline 2px #2c2c2c`;
    } else if (i.target.text === "Resume") {
      i.target.style.textDecoration = `underline 2px #f85e5e`;
    } else {
      i.target.style.textDecoration = `underline 2px #00db49`;
    }
    
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
        <a id="name" className="navbar-brand" href="#about">
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
