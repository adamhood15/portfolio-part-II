import { ACCENT_COLORS } from "../constants/colors";
import useInView from "../hooks/useInView";

const SHAPE_TYPES = ["triangle", "rectangle", "circle"];

const SHAPE_STROKE = "rgba(13, 1, 6, 0.2)";

function ShapeSvg({ type, color }) {
  if (type === "triangle") {
    return (
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <polygon points="50,0 100,100 0,100" fill={color} stroke={SHAPE_STROKE} strokeWidth="2" />
      </svg>
    );
  }

  if (type === "circle") {
    return (
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="50" r="48" fill={color} stroke={SHAPE_STROKE} strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="1" y="1" width="98" height="98" fill={color} stroke={SHAPE_STROKE} strokeWidth="2" />
    </svg>
  );
}

const EDGE_BAND_WIDTH = 22;

export default function AngularBackdrop({ seed = 0, count = 8, excludeColors = [], placement = "full" }) {
  const [ref, isInView] = useInView(0);
  const palette = ACCENT_COLORS.filter((color) => !excludeColors.includes(color));
  const isSingleSide = placement === "left" || placement === "right";

  const shapes = Array.from({ length: count }, (_, i) => {
    const n = seed + i;
    const bandOffset = (n * 53) % EDGE_BAND_WIDTH;

    let left;
    if (placement === "edges") {
      left = n % 2 === 0 ? bandOffset : 100 - EDGE_BAND_WIDTH + bandOffset;
    } else if (placement === "left") {
      left = bandOffset;
    } else if (placement === "right") {
      left = 100 - EDGE_BAND_WIDTH + bandOffset;
    } else {
      left = (n * 53) % 100;
    }

    return {
      type: SHAPE_TYPES[n % SHAPE_TYPES.length],
      color: palette[n % palette.length],
      top: `${(n * 37) % 100}%`,
      left: `${left}%`,
      size: isSingleSide ? 24 + ((n * 17) % 50) : 30 + ((n * 17) % 90),
      rotate: (n * 29) % 360,
      delay: (i % 6) * 90,
    };
  });

  return (
    <div className="angular-backdrop" ref={ref} aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="angular-backdrop-shape"
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
          }}
        >
          <div
            className="angular-backdrop-shape-inner"
            style={{
              opacity: isInView ? 0.85 : 0,
              transform: isInView
                ? `scale(1) rotate(${shape.rotate}deg)`
                : `scale(0.4) rotate(${shape.rotate}deg)`,
              transitionDelay: `${shape.delay}ms`,
            }}
          >
            <ShapeSvg type={shape.type} color={shape.color} />
          </div>
        </div>
      ))}
    </div>
  );
}
