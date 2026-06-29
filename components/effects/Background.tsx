export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_74%)]" />
    </div>
  );
}
