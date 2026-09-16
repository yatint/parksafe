const N = 21;

const inFinder = (r, c) =>
  (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7);

const QRMark = ({ size = 120, dark = "#0A0D14", seed = 5 }) => {
  const cells = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (inFinder(r, c)) continue;
      if ((r * 31 + c * 17 + seed * 13) % 3 !== 0 && (r * 7 + c * 11 + seed) % 5 !== 0) {
        cells.push(<rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill={dark} />);
      }
    }
  }
  const finder = (x, y) => (
    <g key={`f-${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" fill={dark} />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill={dark} />
    </g>
  );
  return (
    <svg
      viewBox={`0 0 ${N} ${N}`}
      width={size}
      height={size}
      className="bg-white rounded-sm"
      data-testid="qr-mark"
      aria-label="ParkSafe QR code"
    >
      {cells}
      {finder(0, 0)}
      {finder(N - 7, 0)}
      {finder(0, N - 7)}
    </svg>
  );
};

export default QRMark;
