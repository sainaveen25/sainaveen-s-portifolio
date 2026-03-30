import { useState, useEffect, useCallback } from "react";

interface TypeWriterProps {
  words: string[];
  className?: string;
}

const TypeWriter = ({ words, className = "" }: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const word = words[currentWordIndex];

    if (isPaused) return;

    if (!isDeleting) {
      const next = word.slice(0, currentText.length + 1);
      setCurrentText(next);
      if (next.length === word.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      const next = word.slice(0, currentText.length - 1);
      setCurrentText(next);
      if (next.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words, isPaused]);

  useEffect(() => {
    if (isPaused) return;
    const speed = isDeleting ? 35 : 70;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, isPaused]);

  return (
    <span className={className}>
      {currentText}
      <span
        className="inline-block w-[3px] h-[1em] bg-primary ml-0.5 align-middle"
        style={{ animation: "blink 1s step-end infinite" }}
      />
    </span>
  );
};

export default TypeWriter;
