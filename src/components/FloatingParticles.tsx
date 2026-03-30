const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1.5,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 8,
}));

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {particles.map((p) => (
      <div
        key={p.id}
        className="absolute rounded-full bg-primary/8 floating-particle"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
        }}
      />
    ))}
    {/* Single geometric shape */}
    <div
      className="absolute top-[20%] right-[10%] w-16 h-16 border border-primary/8 rotate-45 spinning-shape"
    />
  </div>
);

export default FloatingParticles;
