import React, { useState } from "react";

export default function Header({ setActivePage, activePage, pages }) {

  // console.log(pages);
  // console.log(activePage);
  // console.log(activePage);
  let navigation = ["About", "Portfolio", "Resume", "Contact"];

  function renderPage(i) {
    console.log(pages[i]);
    // return setActivePage(pages[i]);
  }

  function renderNav() {
    return navigation.map((item, i) => {
      let link = `#${item.toLowerCase()}`;

      return (
        <li key={i} className="nav-item">
          <a className="nav-link" key={item} href={link}>
            {item}
          </a>
        </li>
      );
    });
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#home">
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
