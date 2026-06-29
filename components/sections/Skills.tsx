"use client";

import { useMemo, useState } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiOpencv,
  SiTensorflow,
  SiGit,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

import TypingTerminal from "../effects/TypingTerminal";

const skillInfo = {
  html: {
    name: "HTML",
    icon: SiHtml5,
    tone: "orange",
    status: "94%",
    lines: [
      { text: "loading html module...", type: "info" },
      { text: "semantic structure ready", type: "success" },
      { text: "accessibility layer online", type: "success" },
      { text: "status: loaded", type: "success" },
    ],
  },
  css: {
    name: "CSS",
    icon: SiCss,
    tone: "blue",
    status: "92%",
    lines: [
      { text: "loading css engine...", type: "info" },
      { text: "responsive layout active", type: "success" },
      { text: "cinematic styling ready", type: "success" },
      { text: "status: loaded", type: "success" },
    ],
  },
  js: {
    name: "JS",
    icon: SiJavascript,
    tone: "yellow",
    wide: true,
    status: "90%",
    lines: [
      { text: "initializing javascript...", type: "info" },
      { text: "interaction layer mounted", type: "success" },
      { text: "events: active", type: "success" },
      { text: "status: running", type: "success" },
    ],
  },
  react: {
    name: "React",
    icon: SiReact,
    tone: "cyan",
    status: "88%",
    lines: [
      { text: "loading react...", type: "info" },
      { text: "components mounted", type: "success" },
      { text: "hooks initialized", type: "success" },
      { text: "status: active", type: "success" },
    ],
  },
  next: {
    name: "Next",
    icon: SiNextdotjs,
    tone: "white",
    status: "86%",
    lines: [
      { text: "npm run dev", type: "info" },
      { text: "Next.js app router ready", type: "success" },
      { text: "server components online", type: "success" },
      { text: "local: localhost:3000", type: "success" },
    ],
  },
  node: {
    name: "Node",
    icon: SiNodedotjs,
    tone: "green",
    status: "78%",
    lines: [
      { text: "loading node runtime...", type: "info" },
      { text: "backend process ready", type: "success" },
      { text: "api layer standby", type: "warning" },
      { text: "status: online", type: "success" },
    ],
  },
  python: {
    name: "Python",
    icon: SiPython,
    tone: "blue",
    wide: true,
    status: "91%",
    lines: [
      { text: "python loaded", type: "info" },
      { text: "import cv2", type: "success" },
      { text: "import ultralytics", type: "success" },
      { text: "model pipeline ready", type: "success" },
    ],
  },
  git: {
    name: "Git",
    icon: SiGit,
    tone: "orange",
    status: "89%",
    lines: [
      { text: "git status", type: "info" },
      { text: "branch: main", type: "success" },
      { text: "working tree clean", type: "success" },
      { text: "ready to commit", type: "success" },
    ],
  },
  supabase: {
    name: "Supabase",
    icon: SiSupabase,
    tone: "green",
    status: "82%",
    lines: [
      { text: "connecting supabase...", type: "info" },
      { text: "database online", type: "success" },
      { text: "realtime standby", type: "warning" },
      { text: "status: connected", type: "success" },
    ],
  },
  opencv: {
    name: "OpenCV",
    icon: SiOpencv,
    tone: "cyan",
    wide: true,
    status: "85%",
    lines: [
      { text: "loading opencv...", type: "info" },
      { text: "image preprocessing ready", type: "success" },
      { text: "feature extraction active", type: "success" },
      { text: "status: ready", type: "success" },
    ],
  },
  tensorflow: {
    name: "TensorFlow",
    icon: SiTensorflow,
    tone: "orange",
    wide: true,
    status: "80%",
    lines: [
      { text: "tensorflow initialized", type: "info" },
      { text: "training graph ready", type: "success" },
      { text: "model evaluation standby", type: "warning" },
      { text: "status: training-ready", type: "success" },
    ],
  },
  vercel: {
    name: "Vercel",
    icon: SiVercel,
    tone: "white",
    status: "87%",
    lines: [
      { text: "deploy started", type: "info" },
      { text: "build optimized", type: "success" },
      { text: "edge network ready", type: "success" },
      { text: "deployment online", type: "success" },
    ],
  },
  engine: {
    name: "AI ENGINE",
    tone: "cyan",
    space: true,
    status: "99%",
    lines: [
      { text: "initializing AI engine...", type: "info" },
      { text: "loading forex analysis system", type: "success" },
      { text: "computer vision online", type: "success" },
      { text: "journal system ready", type: "success" },
    ],
  },
};

const rows = [
  ["html", "css", "js", "react", "next"],
  ["node", "python", "git", "supabase"],
  ["opencv", "tensorflow", "vercel"],
  ["engine"],
] as const;

type SkillKey = keyof typeof skillInfo;

export default function Skills() {
  const [activeKey, setActiveKey] = useState<SkillKey>("engine");
  const active = skillInfo[activeKey];

  const terminalLines = useMemo(() => active.lines, [active]);

  return (
    <section id="skills" className="min-h-screen px-6 py-32 md:px-20">
      <p className="mb-6 text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
        Skill Board
      </p>

      <h2 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.07em] md:text-7xl">
        Tech controller.
      </h2>

      <div className="skills-showcase mt-20">
        <div className="keyboard-layout">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className={`keyboard-row row-${rowIndex + 1}`}>
              {row.map((id) => {
                const skill = skillInfo[id];
                const Icon = "icon" in skill ? skill.icon : null;
                const isActive = activeKey === id;

                return (
                  <button
                    key={id}
                    onClick={() => setActiveKey(id)}
                    className={`keyboard-key tone-${skill.tone} ${
                      "wide" in skill && skill.wide ? "key-wide" : ""
                    } ${"space" in skill && skill.space ? "key-space" : ""} ${
                      isActive ? "key-active" : ""
                    }`}
                    title={skill.name}
                  >
                    {Icon ? <Icon className="keyboard-icon" /> : null}
                    <span>{skill.name}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <aside className="skill-console">
          <div className="console-top">
            <span />
            <span />
            <span />
            <p>{active.name.toLowerCase().replaceAll(" ", "_")}.scan</p>
          </div>

          <div className="console-body">
            <TypingTerminal key={activeKey} lines={terminalLines} />
          </div>

          <div className="console-status">
            <span>{active.name} Ready</span>
            <strong>{active.status}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
