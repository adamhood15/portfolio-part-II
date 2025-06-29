import React from "react";
export default function Header({ setActivePage, activePage }) {

  let navigation = ["About", "Portfolio", "Resume", "Contact"];

  const colors = {
    About: "#657ED4",
    Portfolio: "#2c2c2c",
    Resume: "#f85e5e",
    Contact: "#00db49",
  };

  
  function handleNavClick(e, page) {
    e.preventDefault();
    setActivePage(page);
    window.scrollTo(0, 0);
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg">
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
          {navigation.map((item, i) => {
            const isActive = activePage === item;
            const underlineStyle = isActive
              ? { textDecoration: `underline 2px ${colors[item]}` }
              : { textDecoration: "none" };

            return (
              <li key={i} className="nav-item">
                <a
                  className="nav-link"
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  style={underlineStyle}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}