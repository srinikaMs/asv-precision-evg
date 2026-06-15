export function Gear3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute -inset-20 bg-brand/20 blur-3xl rounded-full" />
      <svg viewBox="0 0 200 200" className="w-[520px] max-w-full animate-spin-slow drop-shadow-[0_0_60px_rgba(26,79,160,0.45)]">
        <defs>
          <linearGradient id="steel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <radialGradient id="hub" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#1a4fa0" />
            <stop offset="100%" stopColor="#0a1f44" />
          </radialGradient>
        </defs>
        {/* gear teeth */}
        <g fill="url(#steel)" stroke="#334155" strokeWidth="0.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <rect
              key={i}
              x="94" y="2" width="12" height="22" rx="2"
              transform={`rotate(${(360 / 16) * i} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="76" />
        </g>
        <circle cx="100" cy="100" r="58" fill="#0f172a" />
        <circle cx="100" cy="100" r="58" fill="none" stroke="#1a4fa0" strokeWidth="2" />
        {/* spokes */}
        <g stroke="url(#steel)" strokeWidth="8" strokeLinecap="round">
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (i * 60 * Math.PI) / 180;
            return (
              <line key={i} x1={100 + Math.cos(a) * 22} y1={100 + Math.sin(a) * 22}
                x2={100 + Math.cos(a) * 52} y2={100 + Math.sin(a) * 52} />
            );
          })}
        </g>
        <circle cx="100" cy="100" r="22" fill="url(#hub)" />
        <circle cx="100" cy="100" r="6" fill="#e2e8f0" />
      </svg>
    </div>
  );
}
