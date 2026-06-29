"use client";

import { useState } from "react";

const nodes = {
  research: {
    title: "Research",
    status: "Root",
    desc: "Pusat eksplorasi pengetahuan, eksperimen, dan arah pengembangan sistem.",
    archive: ["Knowledge Mapping", "Research Planning", "System Thinking"],
  },
  ai: {
    title: "Artificial Intelligence",
    status: "Active",
    desc: "Eksplorasi machine learning, deep learning, reasoning system, dan AI-assisted workflow.",
    archive: ["Machine Learning Notes", "Deep Learning Study", "AI Workflow Experiment"],
  },
  web: {
    title: "Web Development",
    status: "Completed + Active",
    desc: "Eksperimen interface, frontend architecture, backend logic, deployment, dan interactive UI.",
    archive: ["Portfolio V2", "Todo List Web", "Dashboard Concept"],
  },
  cv: {
    title: "Computer Vision",
    status: "Active",
    desc: "Riset visual detection, image processing, object detection, dan chart/image analysis.",
    archive: ["YOLO Detection", "OpenCV Pipeline", "Image Preprocessing"],
  },
  data: {
    title: "Data Science",
    status: "Exploring",
    desc: "Analisis data, visualisasi, dataset preparation, dan pattern discovery.",
    archive: ["Dataset Cleaning", "Visualization Study", "Analytics Notes"],
  },
  automation: {
    title: "Automation",
    status: "Planned",
    desc: "Eksperimen workflow automation, API integration, bot logic, dan scheduled systems.",
    archive: ["API Automation", "GitHub Workflow", "Deployment Script"],
  },
};

type NodeKey = keyof typeof nodes;

export default function Research() {
  const [active, setActive] = useState<NodeKey>("research");
  const current = nodes[active];

  return (
    <section id="research" className="min-h-screen px-6 py-32 md:px-20">
      <p className="mb-6 text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
        Research Lab
      </p>

      <h2 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.07em] md:text-7xl">
        Knowledge grows from curiosity.
      </h2>

      <div className="knowledge-section mt-20">
        <div className="knowledge-tree">
          <div className="tree-root">
            <button
              onMouseEnter={() => setActive("research")}
              className={`tree-node root-node ${active === "research" ? "node-active" : ""}`}
            >
              [ RESEARCH ]
            </button>
          </div>

          <div className="tree-trunk" />

          <div className="tree-branches">
            <span className="branch branch-left" />
            <span className="branch branch-center" />
            <span className="branch branch-right" />
          </div>

          <div className="tree-main-row">
            <button
              onMouseEnter={() => setActive("ai")}
              className={`tree-node ${active === "ai" ? "node-active" : ""}`}
            >
              [ AI RESEARCH ]
              <small>Machine Learning • Deep Learning</small>
            </button>

            <button
              onMouseEnter={() => setActive("web")}
              className={`tree-node ${active === "web" ? "node-active" : ""}`}
            >
              [ WEB DEVELOPMENT ]
              <small>Front-End • Back-End • UI</small>
            </button>

            <button
              onMouseEnter={() => setActive("data")}
              className={`tree-node ${active === "data" ? "node-active" : ""}`}
            >
              [ DATA SCIENCE ]
              <small>Dataset • Analytics • Visualization</small>
            </button>
          </div>

          <div className="tree-lower">
            <button
              onMouseEnter={() => setActive("cv")}
              className={`tree-node sub-node ${active === "cv" ? "node-active" : ""}`}
            >
              [ COMPUTER VISION ]
              <small>YOLO • OpenCV • Detection</small>
            </button>

            <button
              onMouseEnter={() => setActive("automation")}
              className={`tree-node sub-node ${active === "automation" ? "node-active" : ""}`}
            >
              [ AUTOMATION ]
              <small>API • Workflow • Deployment</small>
            </button>
          </div>

          <div className="tree-roots">
            <span>Curiosity</span>
            <span>Knowledge</span>
            <span>Experiment</span>
          </div>
        </div>

        <aside className="research-bubble">
          <div className="bubble-header">
            <span />
            <span />
            <span />
            <p>research_archive.node</p>
          </div>

          <div className="bubble-body">
            <p className="bubble-label">Selected Node</p>
            <h3>{current.title}</h3>

            <div className="bubble-status">
              <span>Status</span>
              <strong>{current.status}</strong>
            </div>

            <p className="bubble-desc">{current.desc}</p>

            <div className="bubble-archive">
              <p>Archive</p>
              {current.archive.map((item) => (
                <span key={item}>&gt; {item}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

