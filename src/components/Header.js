import React from "react";

export default function Header({ setActivePage, activePage }) {

  let navigation = ["About", "Portfolio", "Resume", "Contact"];

  function renderPage(i) {
    setActivePage(i.target.text);
    return activePage;
  }

  function renderNav() {
    return navigation.map((item, i) => {
      let link = `#${item.toLowerCase()}`;

      return (
        <li key={i} className="nav-item">
          <a className="nav-link" id={item} key={item} href={link} onClick={renderPage}>
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
          <span id="A">A</span><span id="d">d</span><span id="a">a</span><span id="m">m</span> <span id="H">H</span><span id="o">o</span><span id="oo">o</span><span id="d">d</span><span id="exclamation">!</span>
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
