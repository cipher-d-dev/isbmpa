import React, { useEffect, useRef, useState } from "react";
import "../css/Spinner.css";

interface SpinnerProps {
  percentage: number;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
}

const Spinner: React.FC<SpinnerProps> = ({ percentage }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [i, setI] = useState<number>(0); // Moved `i` state outside the scroll handler

  const handleScroll = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0 && i < percentage) {
        // Trigger animation logic when the element is visible
        startIncrement();
      } else {
        i !== 0 && setI(0);
      }
    }
  };

  const startIncrement = () => {
    // Clear any existing interval to prevent multiple animations
    let interval: ReturnType<typeof setInterval>;
    interval = setInterval(() => {
      setI((prev) => {
        if (prev >= percentage) {
          clearInterval(interval); // Cleanup when target percentage is reached
          return prev; // Stop updating
        }
        return prev + 1; // Increment the percentage
      });
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup scroll listener
  }, [i, percentage]); // Dependencies include `i` and `percentage`

  return (
    <div className="spinner-wrapper">
      <div ref={targetRef} className="spinner"></div>
      <span className="percentage-text">{i}%</span>
    </div>
  );
};

export default Spinner;
