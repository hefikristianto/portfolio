"use client";

import { useState } from "react";
import Background from "../components/effects/Background";
import BootLoader from "../components/effects/BootLoader";
import ScrollAnimator from "../components/effects/ScrollAnimator";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Research from "../components/sections/Research";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  const [bootDone, setBootDone] = useState(false);

  return (
    <>
      {!bootDone && <BootLoader onFinish={() => setBootDone(true)} />}

      <main
        className={`site-shell min-h-screen overflow-x-hidden ${
          bootDone ? "site-ready" : ""
        }`}
      >
        <ScrollAnimator />
        <Background />
        <Navbar />
        <Hero />
        <Skills />
        <Research />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
