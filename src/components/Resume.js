import resume from "../assets/resume/resume.pdf";

export default function Resume() {

  let frontEndSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'jQuery'];
  let backEndSkills = ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'MongoDB', 'Mongoose'];

  function renderSkills(skills) {
    return skills.map((skill, i) => {
      return (
        <li className="list-group-item" key={i}>{skill}</li>
      )
    })
  }

    return (
      <div>
      <div className="resume-section" id="resume">
        <h1 className="resume-h1">Resume</h1>
        <div className="resume-data">
          <ul className="list-group">
            <span className="skills-title">Front End Proficiencies</span>
            {renderSkills(frontEndSkills)}
          </ul>
          <ul className="list-group">
          <span className="skills-title">Back End Proficiencies</span>
            {renderSkills(backEndSkills)}
          </ul>
        </div>
        <button id="resume-btn" type="button" className="btn">
          <a id="resume-btn-link" href={resume} download="resume">
          <i className="fa-solid fa-download"></i>
          </a>
        </button>
      </div>
      <div className="separator"></div>
      </div>
    );
  }