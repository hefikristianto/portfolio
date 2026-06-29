import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50 backdrop-blur-xl">
      {children}
    </span>
  );
}
