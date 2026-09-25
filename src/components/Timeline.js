import { useState } from "react";
import weddingPhoto from "../assets/images/weddingPhoto.jpeg";
import resume from "../assets/resume/resume.pdf";
import Reveal from "./Reveal";
import AngularBackdrop from "./AngularBackdrop";
import ProjectModal from "./ProjectModal";
import TimelineEntry from "./TimelineEntry";
import useScrollProgress from "../hooks/useScrollProgress";
import { allProjects } from "../data/projects";
import { ACCENT_COLORS, ACCENT_CLASS_NAMES } from "../constants/colors";

const CONTACT_EMAIL = "adamhood15@gmail.com";

export default function Timeline() {
  const [timelineRef, timelineProgress] = useScrollProgress();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="timeline-page">
      <section className="timeline-hero" id="hero">
        <AngularBackdrop seed={0} count={6} excludeColors={[ACCENT_COLORS[0]]} />
        <div className="timeline-hero-photo-frame">
          <img className="timeline-hero-photo" src={weddingPhoto} alt="Adam Hood" />
        </div>
        <div className="timeline-hero-intro">
          <h1 className="timeline-hero-name">Adam Hood</h1>
          <p className="timeline-hero-text">
            I'm a Web Developer based in Houston, TX, who builds efficient,
            user-friendly digital experiences. At Pyek, I helped grow the
            company's web presence from a single landing page to a 45-page,
            fully responsive site, and designed an interactive events
            calendar that improved engagement time by over 50%. Scroll down
            to see how that work has evolved over the years.
          </p>
        </div>
      </section>

      <section className="timeline-track" id="timeline" ref={timelineRef}>
        <div
          className="timeline-line"
          style={{ height: `${timelineProgress * 100}%` }}
        ></div>

        {allProjects.map((project, i) => {
          const accentClassName = ACCENT_CLASS_NAMES[i % ACCENT_CLASS_NAMES.length];
          const isLeft = i % 2 === 0;

          return (
            <TimelineEntry
              key={project.id}
              project={project}
              index={i}
              isLeft={isLeft}
              accentClassName={accentClassName}
              onSelect={() => setSelectedProject({ ...project, accentClassName })}
            />
          );
        })}
      </section>

      <section className="timeline-outro" id="outro">
        <AngularBackdrop seed={60} count={8} placement="edges" />
        <Reveal className="timeline-outro-inner">
          <h2 className="timeline-outro-heading">Let's build something together</h2>
          <div className="timeline-outro-actions">
            <a
              className="timeline-outro-btn accent-blue"
              href={resume}
              download="resume"
            >
              <span className="timeline-outro-btn-icon">
                <i className="fa-solid fa-download"></i>
              </span>
              Download Resume
            </a>
            <a
              className="timeline-outro-btn accent-red"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <span className="timeline-outro-btn-icon">
                <i className="fa-solid fa-envelope"></i>
              </span>
              Get In Touch
            </a>
          </div>
        </Reveal>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
