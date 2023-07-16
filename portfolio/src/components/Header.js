export default function Header(props) {

  let navigation = ["Home", "About", "Portfolio", "Resume", "Contact"];

  function renderNav(props) {
    return navigation.map((item, i) => {
      let link = `#${item.toLowerCase()}`;
      // let render = renderPage[i];

      function renderPage(props) {
        props.page
      }

      return (
        <li key={i} className="nav-item">
          <a className="nav-link" key={item} href={link} onClick={renderPage}>
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
