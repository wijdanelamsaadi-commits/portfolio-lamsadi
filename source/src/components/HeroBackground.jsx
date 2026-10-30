import { motion } from "framer-motion";

const bottomNodes = [
  [45, 690, 5],
  [180, 610, 8],
  [295, 675, 5],
  [410, 595, 8],
  [535, 650, 5],
  [690, 565, 8],
  [850, 610, 5],
];

const topNodes = [
  [710, 52, 5],
  [860, 128, 8],
  [1017, 90, 5],
  [1217, 148, 8],
  [1392, 96, 5],
  [610, 320, 5],
  [720, 205, 8],
  [850, 325, 8],
  [1020, 260, 5],
  [1220, 335, 8],
  [1410, 260, 5],
];

export default function HeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <div className="watercolor-left" />
      <motion.svg
        className="network"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        animate={{ y: [0, -9, 0], x: [0, 6, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M45 690 L180 610 L295 675 L410 595 L535 650 L690 565 L850 610" fill="none" />
        <path d="M710 52 L860 128 L1017 90 L1217 148 L1392 96" fill="none" />
        <path d="M610 320 L720 205 L850 325 L1020 260 L1220 335 L1410 260" fill="none" />
        <line x1="180" y1="610" x2="190" y2="760" />
        <line x1="295" y1="675" x2="310" y2="820" />
        <line x1="860" y1="128" x2="850" y2="325" />
        <line x1="1020" y1="260" x2="1017" y2="90" />
        {bottomNodes.map(([x, y, r]) => (
          <circle key={`bottom-${x}`} cx={x} cy={y} r={r} />
        ))}
        {topNodes.map(([x, y, r], index) => (
          <circle key={`top-${x}-${index}`} cx={x} cy={y} r={r} />
        ))}
      </motion.svg>
      <motion.span className="floating-dot dot-one" animate={{ y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="floating-dot dot-two" animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="floating-dot dot-three" animate={{ y: [0, 8, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} />
    </div>
  );
}
