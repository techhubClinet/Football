/**
 * Hexagonal radar (spider) chart with 6 axes.
 * Axes order: Vitesse (top), Dribble, Tir, Passe, Physique, Duel — clockwise from top.
 */
export default function RadarChart({ data, size = 200, maxValue = 100 }) {
  const center = size / 2;
  const radius = (size / 2) * 0.85;
  const axes = [
    { label: 'Vitesse', value: data.Vitesse ?? 0 },
    { label: 'Dribble', value: data.Dribble ?? 0 },
    { label: 'Tir', value: data.Tir ?? 0 },
    { label: 'Passe', value: data.Passe ?? 0 },
    { label: 'Physique', value: data.Physique ?? 0 },
    { label: 'Duel', value: data.Duel ?? 0 },
  ];

  const getPoint = (axisIndex, valueRatio) => {
    const angleDeg = -90 + axisIndex * 60;
    const angleRad = (angleDeg * Math.PI) / 180;
    const r = radius * valueRatio;
    return {
      x: center + r * Math.cos(angleRad),
      y: center - r * Math.sin(angleRad),
    };
  };

  const gridLevels = [0.25, 0.5, 0.75, 1];
  const labelOffset = 1.08;

  const dataPoints = axes.map((_, i) => getPoint(i, axes[i].value / maxValue));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  const gridPaths = gridLevels.map((level) => {
    const pts = axes.map((_, i) => getPoint(i, level));
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
  });

  const axisLines = axes.map((_, i) => {
    const end = getPoint(i, 1);
    return { x1: center, y1: center, x2: end.x, y2: end.y };
  });

  const labelPositions = axes.map((_, i) => getPoint(i, labelOffset));

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="radar-chart-svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="radar-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.15)" />
        </linearGradient>
      </defs>
      {/* Grid hexagons */}
      {gridPaths.map((path, i) => (
        <path
          key={i}
          d={path}
          fill="none"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
        />
      ))}
      {/* Axis lines */}
      {axisLines.map((line, i) => (
        <line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
        />
      ))}
      {/* Data polygon fill */}
      <path
        d={dataPath}
        fill="url(#radar-fill)"
        stroke="rgba(139, 92, 246, 0.9)"
        strokeWidth="1.5"
      />
      {/* Axis labels */}
      {labelPositions.map((pos, i) => (
        <text
          key={i}
          x={pos.x}
          y={pos.y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="radar-chart-label"
        >
          {axes[i].label}
        </text>
      ))}
    </svg>
  );
}
