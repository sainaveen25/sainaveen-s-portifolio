import { useState, useEffect } from "react";

const techRoles = [
  "Full Stack Developer",
  "Java & Spring Boot Developer",
  "Cloud & AWS Engineer",
  "React Frontend Developer",
  "Backend Systems Builder",
  "DevOps & CI/CD Engineer",
];

const RotatingTechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % techRoles.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rotating-stack-wrapper" aria-live="polite">
      <div className="rotating-stack-container">
        <div
          className={`rotating-stack-item ${isAnimating ? "rotating-out" : "rotating-in"}`}
        >
          <span className="rotating-stack-text">
            {techRoles[currentIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RotatingTechStack;
