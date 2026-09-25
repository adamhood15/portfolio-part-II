import AngularBackdrop from "./AngularBackdrop";
import useLineTouch from "../hooks/useLineTouch";

const STICKER_SHAPES = ["triangle", "circle", "rectangle"];

// Placeholder stats for preview purposes only — swap for real per-project figures.
const DEMO_STATS = [
  { value: "+37%", label: "Conversions" },
  { value: "0→50", label: "Pages Shipped" },
  { value: "+40%", label: "Site Traffic" },
  { value: "Ground-Up", label: "Rebuild" },
  { value: "+50%", label: "Engagement Time" },
  { value: "2,400", label: "Lines of JS" },
  { value: "98.5%", label: "Build Accuracy" },
  { value: "+32.9%", label: "Click Rate" },
  { value: "Full-Stack", label: "Build" },
  { value: "3rd-Party", label: "API Integration" },
  { value: "CLI", label: "Tool" },
  { value: "Custom", label: "Dashboard" },
];

function TitleSticker({ shape }) {
  if (shape === "circle") {
    return (
      <svg
        className="timeline-entry-sticker timeline-entry-sticker-circle"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="45" />
      </svg>
    );
  }

  if (shape === "rectangle") {
    return (
      <svg className="timeline-entry-sticker" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="8" y="8" width="84" height="84" />
      </svg>
    );
  }

  return (
    <svg className="timeline-entry-sticker" viewBox="0 0 100 100" aria-hidden="true">
      <polygon points="50,6 94,90 6,90" />
    </svg>
  );
}

export default function TimelineEntry({ project, index, isLeft, accentClassName, onSelect }) {
  const [dotRef, isRevealed] = useLineTouch();
  const stat = project.stat || DEMO_STATS[index % DEMO_STATS.length];

  return (
    <div
      className={`timeline-entry reveal${isRevealed ? " reveal-visible" : ""} ${
        isLeft ? "timeline-entry-left" : "timeline-entry-right"
      } ${accentClassName}`}
    >
      <AngularBackdrop seed={index * 5} count={2} placement={isLeft ? "left" : "right"} />
      <h3 className="timeline-entry-date-heading">{project.date}</h3>
      <div className="timeline-dot" ref={dotRef}></div>
      <div className="timeline-entry-connector"></div>
      <button type="button" className="timeline-entry-card" onClick={onSelect}>
        <div className="timeline-entry-block">
          <TitleSticker shape={STICKER_SHAPES[index % STICKER_SHAPES.length]} />
          {project.category === "personal" && (
            <span className="timeline-entry-category">Personal Project</span>
          )}
          <div className="timeline-entry-image-frame">
            <img
              className="timeline-entry-image"
              src={project.thumbnail || project.images[0]}
              alt={project.title}
            />
          </div>
          <h3 className="timeline-entry-title">{project.title}</h3>
          <p className="timeline-entry-excerpt">{project.description}</p>
          <div className="timeline-entry-stat">
            <span className="timeline-entry-stat-value">{stat.value}</span>
            <span className="timeline-entry-stat-label">{stat.label}</span>
          </div>
          <span className="timeline-entry-cta">
            View case study <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </button>
    </div>
  );
}
