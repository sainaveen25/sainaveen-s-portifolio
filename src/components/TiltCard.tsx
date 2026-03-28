import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const TiltCard = ({ children, className = "", glareColor, as = "div", ...rest }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTransform({ rotateX, rotateY, glareX: (x / rect.width) * 100, glareY: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  const Component = as === "a" ? motion.a : motion.div;

  return (
    <Component
      ref={cardRef as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
        scale: isHovering ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden ${className}`}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      {...rest}
    >
      {children}
      {/* Glare overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovering ? 0.15 : 0,
          background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, ${glareColor || "hsl(150 100% 60% / 0.3)"}, transparent 60%)`,
        }}
      />
      {/* Border glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          boxShadow: `inset 0 0 0 1px hsl(150 100% 60% / 0.15), 0 0 30px hsl(150 100% 60% / 0.06)`,
        }}
      />
    </Component>
  );
};

export default TiltCard;
