"use client";

import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const activeProject = projects[activeIndex];

  const changeProject = (direction: "next" | "prev") => {
    setAnimKey((current) => current + 1);

    setActiveIndex((current) => {
      if (direction === "next") {
        return current === projects.length - 1 ? 0 : current + 1;
      }

      return current === 0 ? projects.length - 1 : current - 1;
    });
  };

  const goToProject = (index: number) => {
    if (index === activeIndex) return;

    setAnimKey((current) => current + 1);
    setActiveIndex(index);
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-32 md:px-20">
      <p className="mb-6 text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
        Build Archive
      </p>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.07em] md:text-7xl">
          From research to reality.
        </h2>

        <a
          href="#contact"
          className="w-fit rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-black uppercase text-cyan-300 transition hover:bg-cyan-300 hover:text-black"
        >
          View All Projects
        </a>
      </div>

      <div className="project-viewer mt-20">
        <div key={animKey} className="project-slide">
          <div className="archive-preview">
            <span className="archive-number">{activeProject.id}</span>

            <div className="archive-monitor">
              <div className="monitor-grid" />

              <img
                src={`/api/screenshot?url=${encodeURIComponent(activeProject.website)}`}
                alt={activeProject.title}
                className="project-live-preview"
              />

              <div className="monitor-reflection" />
              <div className="monitor-scan" />
            </div>
          </div>

          <div className="archive-info">
            <div className="archive-meta">
              <span>Status: {activeProject.status}</span>
              <span>{activeProject.year}</span>
              <span>{activeProject.version}</span>
            </div>

            <h3>{activeProject.title}</h3>

            <p className="archive-desc">{activeProject.desc}</p>

            <div className="archive-stack">
              {activeProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="build-log">
              <p>BUILD LOG</p>

              {activeProject.logs.map((log) => (
                <span key={log}>&gt; {log}</span>
              ))}
            </div>

            <div className="archive-actions">
              <a href="#contact">Open Brief</a>
              <a href="#contact">Source Log</a>
            </div>
          </div>
        </div>

        <div className="project-controls">
          <button onClick={() => changeProject("prev")}>Prev</button>

          <div className="project-dots">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToProject(index)}
                className={activeIndex === index ? "dot-active" : ""}
              >
                {project.id}
              </button>
            ))}
          </div>

          <button onClick={() => changeProject("next")}>Next</button>
        </div>
      </div>
    </section>
  );
}
