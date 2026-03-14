import React, { useEffect, useRef, useState } from "react";
import "../css/Spinner.css";

interface SpinnerProps {
  percentage: number;
  // Removed setPercentage from props as it wasn't being used in the internal logic
}

const Spinner: React.FC<SpinnerProps> = ({ percentage }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
        } else {
          // Reset when it leaves the viewport (optional)
          setHasStarted(false);
          setDisplayValue(0);
        }
      },
      { threshold: 0.1 }, // Triggers when 10% of the component is visible
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (hasStarted && displayValue < percentage) {
      interval = setInterval(() => {
        setDisplayValue((prev) => {
          if (prev >= percentage) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 30);
    }

    return () => clearInterval(interval);
  }, [hasStarted, displayValue, percentage]);

  // Dynamic style for the spinner progress
  const spinnerStyle = {
    "--percentage": displayValue,
  } as React.CSSProperties;

  return (
    <div className="spinner-wrapper">
      <div className="spinner-container" ref={targetRef} style={spinnerStyle}>
        <div className="spinner-track" />
        <div className="spinner" />
        <span className="percentage-text">{displayValue}%</span>
      </div>
      <span className="spinner-label">Member Satisfaction Rate</span>
    </div>
  );
};

export default Spinner;
