interface ChordDiagramProps {
  frets: (number | null)[];
  fingers: (number | null)[];
  baseFret: number;
  barres: number[];
  size?: "sm" | "md" | "lg";
  showFingers?: boolean;
}

const SIZES = {
  sm: { width: 80, height: 100, dotR: 4, fontSize: 7, topFontSize: 8 },
  md: { width: 120, height: 150, dotR: 6, fontSize: 10, topFontSize: 12 },
  lg: { width: 180, height: 220, dotR: 9, fontSize: 15, topFontSize: 16 },
};

export function ChordDiagram({
  frets,
  fingers,
  baseFret,
  barres,
  size = "md",
  showFingers = true,
}: ChordDiagramProps) {
  const s = SIZES[size];
  const strings = 6;
  const numFrets = 5;

  const padX = s.width * 0.18;
  const padTop = s.height * 0.18;
  const padBottom = s.height * 0.06;
  const gridW = s.width - padX * 2;
  const gridH = s.height - padTop - padBottom;
  const stringSpacing = gridW / (strings - 1);
  const fretSpacing = gridH / numFrets;

  const stringX = (i: number) => padX + i * stringSpacing;
  const fretY = (f: number) => padTop + f * fretSpacing;

  return (
    <svg
      width={s.width}
      height={s.height}
      viewBox={`0 0 ${s.width} ${s.height}`}
      className="text-foreground"
    >
      {/* Nut or fret number */}
      {baseFret === 1 ? (
        <line
          x1={padX}
          y1={padTop}
          x2={padX + gridW}
          y2={padTop}
          stroke="currentColor"
          strokeWidth={3}
        />
      ) : (
        <text
          x={padX - s.dotR - 4}
          y={fretY(0.5) + s.fontSize * 0.35}
          textAnchor="end"
          fill="currentColor"
          fontSize={s.fontSize}
          fontWeight="bold"
        >
          {baseFret}
        </text>
      )}

      {/* Fret lines */}
      {Array.from({ length: numFrets + 1 }).map((_, f) => (
        <line
          key={`fret-${f}`}
          x1={padX}
          y1={fretY(f)}
          x2={padX + gridW}
          y2={fretY(f)}
          stroke="currentColor"
          strokeWidth={baseFret === 1 && f === 0 ? 0 : 1}
          strokeOpacity={0.4}
        />
      ))}

      {/* String lines */}
      {Array.from({ length: strings }).map((_, i) => (
        <line
          key={`string-${i}`}
          x1={stringX(i)}
          y1={padTop}
          x2={stringX(i)}
          y2={padTop + gridH}
          stroke="currentColor"
          strokeWidth={1}
          strokeOpacity={0.4}
        />
      ))}

      {/* Barre */}
      {barres.map((barreFret) => {
        const barreStrings = frets
          .map((f, i) => (f !== null && f >= barreFret ? i : -1))
          .filter((i) => i !== -1);
        if (barreStrings.length < 2) return null;
        const first = barreStrings[0];
        const last = barreStrings[barreStrings.length - 1];
        const y = fretY(barreFret - baseFret + 1) - fretSpacing / 2;

        return (
          <rect
            key={`barre-${barreFret}`}
            x={stringX(first) - s.dotR * 0.5}
            y={y - s.dotR}
            width={stringX(last) - stringX(first) + s.dotR}
            height={s.dotR * 2}
            rx={s.dotR}
            fill="currentColor"
            opacity={0.8}
          />
        );
      })}

      {/* Open / Muted indicators + finger dots */}
      {frets.map((fret, i) => {
        const x = stringX(i);

        if (fret === null) {
          return (
            <text
              key={`x-${i}`}
              x={x}
              y={padTop - s.topFontSize * 0.5}
              textAnchor="middle"
              fill="currentColor"
              fontSize={s.topFontSize}
              opacity={0.6}
            >
              x
            </text>
          );
        }

        if (fret === 0) {
          return (
            <circle
              key={`o-${i}`}
              cx={x}
              cy={padTop - s.topFontSize * 0.5}
              r={s.dotR * 0.6}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              opacity={0.6}
            />
          );
        }

        const y = fretY(fret - baseFret + 1) - fretSpacing / 2;
        const finger = fingers[i];

        return (
          <g key={`dot-${i}`}>
            <circle cx={x} cy={y} r={s.dotR} fill="currentColor" />
            {showFingers && finger && (
              <text
                x={x}
                y={y + s.fontSize * 0.35}
                textAnchor="middle"
                fill="currentColor"
                fontSize={s.fontSize * 0.8}
                className="fill-background"
              >
                {finger}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
