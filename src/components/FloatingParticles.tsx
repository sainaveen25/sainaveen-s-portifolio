import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5,
}));

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-primary/10"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size,
        }}
        animate={{
          y: [0, -30, 0, 30, 0],
          x: [0, 15, -15, 10, 0],
          opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: "easeInOut",
        }}
      />
    ))}
    {/* Geometric shapes */}
    <motion.div
      className="absolute top-[20%] right-[10%] w-16 h-16 border border-primary/10 rotate-45"
      animate={{ rotate: [45, 225, 45], scale: [1, 1.1, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute bottom-[30%] left-[5%] w-12 h-12 border border-accent/10 rounded-full"
      animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-[60%] right-[20%] w-8 h-8 border border-primary/8"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default FloatingParticles;
