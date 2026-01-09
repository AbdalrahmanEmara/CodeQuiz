export default function GlowingCubeLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] to-[#1a0a2e] overflow-hidden">
      <div className="relative perspective-[1000px]">
        {/* Glow */}
        <div className="absolute w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(138,43,226,0.4)_0%,transparent_70%)] blur-[40px] animate-pulseGlow" />

        {/* Particles */}
        <div className="absolute w-[400px] h-[400px] pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className={`particle absolute w-[3px] h-[3px] rounded-full bg-[rgba(138,43,226,0.8)] particle-${i + 1}`}
            />
          ))}
        </div>

        {/* Cube */}
        <div className="relative w-[200px] h-[200px] transform-style-3d animate-cubeRotate">
          <div className="cube-face front" />
          <div className="cube-face back" />
          <div className="cube-face right" />
          <div className="cube-face left" />
          <div className="cube-face top" />
          <div className="cube-face bottom" />
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-[rgba(138,43,226,0.9)] text-lg font-semibold tracking-[4px] animate-fadeInOut">
          LOADING
        </div>
      </div>
    </div>
  );
}
