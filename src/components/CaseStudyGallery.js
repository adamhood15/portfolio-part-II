import { useState } from "react";

export default function CaseStudyGallery({ images, title }) {
  const [active, setActive] = useState(0);

  return (
    <div className="case-study-gallery">
      <img
        className="case-study-image-main"
        src={images[active]}
        alt={title}
      />
      {images.length > 1 && (
        <div className="case-study-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className={`case-study-thumb-btn ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show screenshot ${i + 1} of ${title}`}
            >
              <img
                className="case-study-image-thumb"
                src={img}
                alt={`${title} screenshot ${i + 1}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
