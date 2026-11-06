import { useState } from "react";

export default function CaseStudyGallery({ images: afterImages, beforeImage, title }) {
  const images = beforeImage ? [...afterImages, beforeImage] : afterImages;
  const isBefore = (i) => Boolean(beforeImage) && i === images.length - 1;
  const [active, setActive] = useState(0);
  const showNav = images.length > 1;

  function showPrev() {
    setActive((i) => (i - 1 + images.length) % images.length);
  }

  function showNext() {
    setActive((i) => (i + 1) % images.length);
  }

  return (
    <div className="case-study-gallery">
      <div className="case-study-image-main-frame">
        {showNav && (
          <button
            type="button"
            className="case-study-nav-btn case-study-nav-prev"
            onClick={showPrev}
            aria-label={`Show previous screenshot of ${title}`}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}
        <img
          className="case-study-image-main"
          src={images[active]}
          alt={isBefore(active) ? `${title} — before redesign` : title}
        />
        {isBefore(active) && <span className="case-study-before-badge">Before</span>}
        {showNav && (
          <button
            type="button"
            className="case-study-nav-btn case-study-nav-next"
            onClick={showNext}
            aria-label={`Show next screenshot of ${title}`}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>
      {images.length > 1 && (
        <div className="case-study-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className={`case-study-thumb-btn ${i === active ? "active" : ""}${isBefore(i) ? " is-before" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1} of ${title}`}
            >
              <img
                className="case-study-image-thumb"
                src={img}
                alt={`${title} screenshot ${i + 1}`}
              />
              {isBefore(i) && <span className="case-study-thumb-tag">Before</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
