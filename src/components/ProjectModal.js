import { useEffect } from "react";
import CaseStudyGallery from "./CaseStudyGallery";
import { ACCENT_CLASS_NAMES } from "../constants/colors";

export default function ProjectModal({ project, onClose }) {
  const accentClassName = project.accentClassName || ACCENT_CLASS_NAMES[0];

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className={`project-modal ${accentClassName}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-modal-title`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="project-modal-scroll">
          <CaseStudyGallery images={project.images} title={project.title} />

          <div className="project-modal-content">
            <div className="project-modal-meta">
              <span className="project-modal-date">{project.date}</span>
              {project.category === "personal" && (
                <span className="timeline-entry-category">Personal Project</span>
              )}
            </div>
            <h3 id={`${project.id}-modal-title`} className="project-modal-title">
              {project.title}
            </h3>
            {project.stat && (
              <div className="project-modal-stat">
                <span className="project-modal-stat-value">{project.stat.value}</span>
                <span className="project-modal-stat-label">{project.stat.label}</span>
              </div>
            )}

            {project.story ? (
              <div className="project-modal-story">
                {project.story.map((section) => (
                  <div key={section.heading} className="project-modal-story-section">
                    <div className="project-modal-story-header">
                      {section.icon && <i className={`project-modal-story-icon ${section.icon}`}></i>}
                      <h4 className="project-modal-story-heading">{section.heading}</h4>
                    </div>
                    {section.quote && (
                      <blockquote className="project-modal-story-quote">{section.quote}</blockquote>
                    )}
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="project-modal-description">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="project-modal-highlights">
                        {section.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p className="project-modal-description">{project.description}</p>

                {project.highlights && (
                  <ul className="project-modal-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {project.tech && (
              <div className="project-modal-pill-group">
                <h5 className="project-modal-pill-label">Technologies</h5>
                <div className="project-modal-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {project.skills && (
              <div className="project-modal-pill-group">
                <h5 className="project-modal-pill-label">Skills</h5>
                <div className="project-modal-tech">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="tech-pill">{skill}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="project-modal-links">
              {project.githubLink && (
                <a
                  className="project-modal-link-btn"
                  target="_blank"
                  rel="noreferrer"
                  href={project.githubLink}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              )}
              {project.deployedLink && (
                <a
                  className="project-modal-link-btn"
                  target="_blank"
                  rel="noreferrer"
                  href={project.deployedLink}
                >
                  <i className="fa-solid fa-display"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
