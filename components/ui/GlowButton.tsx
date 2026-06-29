import { ReactNode } from "react";

type GlowButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function GlowButton({
  children,
  href,
  variant = "primary",
}: GlowButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/80"
      : "border border-white/15 bg-white/[0.04] text-white/75 hover:bg-white/10 hover:text-white";

  return (
    <a
      href={href}
      className={`rounded-full px-6 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </a>
  );
}
