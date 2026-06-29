const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-8 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-black/45 px-6 py-3 backdrop-blur-xl">
      <div className="flex items-center gap-7 text-sm text-neutral-400">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="transition hover:text-cyan-300"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
