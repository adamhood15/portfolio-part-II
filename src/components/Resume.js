import React, { useEffect } from 'react';
import resume from '../assets/resume/resume.pdf';
import content from '../assets/content.json';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    const imageName = item.replace('./', '').split('.')[0];
    images[imageName] = r(item);
  });
  return images;
};

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to run on initial render only

  function renderSkills() {
    return content.logos.map((logo, i) => {
      const logoName = logo.name.toLowerCase().replace(/\s+/g, '');
      return (
        <div className="logo-container col-2 py-5" key={i}>
          <img
            className="logo p-2"
            src={images[logoName]}
            alt={logo.name}
            style={{ width: "70px", height: "70px" }}
          />
        </div>
      );
    });
  }

  return (
    <div >
      <div className="resume-section" id="resume">
        <h1 className="resume-h1 row">SKILLS</h1>
        <button id="resume-btn" type="button" className="btn bg-black row ">
          <a id="resume-btn-link" className="col m-2" href={resume} download="resume">
             Resume <i className="fa-solid fa-download"></i>
          </a>
        </button>
        <div className="row p-2">
          {renderSkills()}
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
}
