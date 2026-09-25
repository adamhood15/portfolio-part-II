import Reveal from "./Reveal";
import CaseStudyGallery from "./CaseStudyGallery";
import { professionalProjects, personalProjects } from "../data/projects";

export default function Projects() {
    function createCaseStudies(projects) {
      return projects.map((project, i) => {
        return (
          <Reveal
            key={project.id}
            id={project.id}
            className={`case-study${i % 2 === 1 ? " case-study-reverse" : ""}`}
          >
            <CaseStudyGallery images={project.images} title={project.title} />
            <div className="case-study-content">
              <h3 className="case-study-title">{project.title}</h3>
              <p className="case-study-description">{project.description}</p>
              {project.highlights && (
                <ul className="case-study-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              )}
              {project.tech && (
                <div className="case-study-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              )}
              <div className="case-study-links">
                {project.githubLink && (
                  <a className="button-link" target="_blank" rel="noreferrer" href={project.githubLink}>
                    <i className="case-study-icon fa-brands fa-github"></i>
                  </a>
                )}
                {project.deployedLink && (
                  <a className="button-link" target="_blank" rel="noreferrer" href={project.deployedLink}>
                    <i className="case-study-icon fa-solid fa-display"></i>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        );
      });
    }

    function createProjectCards(projects) {
      return projects.map((project, i) => {
        return (
          <Reveal
            key={i}
            id="portfolio"
            className="card bg-dark text-white"
            delay={(i % 4) * 100}
          >
            <img key={project.image} className="card-img" src={project.image} alt={project.title}></img>
            <div key={project.title} id={project.id} className="card-img-overlay card-info overflow-auto">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              {project.githubLink && (
                  <a className="button-link" target="_blank" rel="noreferrer" href={project.githubLink}><i id="portfolio-github" className="icon fa-brands fa-github"></i></a>
              )}
              {project.deployedLink && (
                <a className="button-link" target="_blank" rel="noreferrer" href={project.deployedLink}><i className="fa-solid fa-display"></i></a>
              )}
            </div>
          </Reveal>
        );
      });
    }

    return (
      <div>
        <div className="portfolio" id="portfolio-section">
          <h1 className="portfolio-h1">Portfolio</h1>
          <h2 className="portfolio-h2">Professional Work</h2>
          <div className="case-studies">{createCaseStudies(professionalProjects)}</div>
          <h2 className="portfolio-h2">Personal Projects</h2>
          <div className="cards">{createProjectCards(personalProjects)}</div>
        </div>
        <div className="separator-projects"></div>
      </div>
    );
}
