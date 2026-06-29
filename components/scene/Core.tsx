"use client";

import { motion } from "motion/react";

const nodes = [
  { x: "50%", y: "6%" },
  { x: "15%", y: "30%" },
  { x: "85%", y: "30%" },
  { x: "15%", y: "70%" },
  { x: "85%", y: "70%" },
  { x: "50%", y: "94%" },
];

export default function Core() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
      className="relative h-full w-full"
    >
      <div className="absolute inset-0 rounded-full border border-white/10" />

      <div className="absolute inset-12 rounded-full border border-white/10" />

      <div className="absolute inset-24 rounded-full border border-white/10" />

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 3,
            delay: index * 0.3,
            repeat: Infinity,
          }}
          className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.9)]"
          style={{
            left: node.x,
            top: node.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/15 bg-white/[0.08] shadow-[0_0_100px_rgba(255,255,255,.25)] backdrop-blur-xl"
      >
        <div className="absolute inset-5 rounded-[1.4rem] border border-white/10 bg-black/30" />

        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_30px_white]" />
      </motion.div>
    </motion.div>
  );
}
