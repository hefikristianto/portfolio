"use client";

import { useEffect, useState } from "react";

type TerminalLine = {
  text: string;
  type?: string;
};

type TypingTerminalProps = {
  lines: TerminalLine[];
};

export default function TypingTerminal({ lines }: TypingTerminalProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<TerminalLine[]>([]);

  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
    setCompletedLines([]);
  }, [lines]);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    const isLineDone = charIndex >= currentLine.text.length;

    if (isLineDone) {
      const pause = setTimeout(() => {
        setCompletedLines((current) => [...current, currentLine]);
        setLineIndex((current) => current + 1);
        setCharIndex(0);
      }, 280);

      return () => clearTimeout(pause);
    }

    const typing = setTimeout(() => {
      setCharIndex((current) => current + 1);
    }, 28);

    return () => clearTimeout(typing);
  }, [charIndex, lineIndex, lines]);

  const activeLine = lineIndex < lines.length ? lines[lineIndex] : null;
  const activeText = activeLine ? activeLine.text.slice(0, charIndex) : "";

  return (
    <div className="typing-terminal">
      {completedLines.map((line, index) => (
        <p
          key={`${line.text}-${index}`}
          className={`terminal-line terminal-${line.type ?? "info"}`}
        >
          <span>&gt;</span> {line.text}
        </p>
      ))}

      {activeLine ? (
        <p className={`terminal-line terminal-${activeLine.type ?? "info"}`}>
          <span>&gt;</span> {activeText}
          <b className="inline-cursor">_</b>
        </p>
      ) : (
        <p className="terminal-cursor">
          <span>&gt;</span> _
        </p>
      )}
    </div>
  );
}
