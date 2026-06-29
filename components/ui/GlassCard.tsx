import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_0_80px_rgba(255,255,255,0.04)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}
