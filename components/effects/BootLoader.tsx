"use client";

import { useEffect, useState } from "react";

type BootLoaderProps = {
  onFinish?: () => void;
};

export default function BootLoader({ onFinish }: BootLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setClosing(true);
          }, 450);

          setTimeout(() => {
            onFinish?.();
          }, 950);

          return 100;
        }

        return current + 4;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={`boot-loader ${closing ? "boot-closing" : ""}`}>
      <div className="boot-panel">
        <h1>HEFI SYSTEM</h1>

        <div className="boot-lines">
          <p>&gt; booting portfolio...</p>
          <p>&gt; loading AI module...</p>
          <p>&gt; loading cinematic interface...</p>
          <p className={progress >= 100 ? "boot-online" : ""}>
            &gt; {progress >= 100 ? "system online." : "initializing..."}
          </p>
        </div>

        <div className="boot-progress">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
