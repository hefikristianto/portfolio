export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-32 md:px-20">
      <p className="mb-6 text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
        Contact
      </p>

      <h2 className="max-w-5xl text-5xl font-black leading-none tracking-[-0.07em] md:text-7xl">
        Let&apos;s build something impossible-looking.
      </h2>

      <div className="contact-terminal mt-20">
        <div className="contact-top">
          <span />
          <span />
          <span />
          <p>transmission_channel.exe</p>
        </div>

        <div className="contact-grid">
          <div className="contact-log">
            <p><b>&gt;</b> status: online</p>
            <p><b>&gt;</b> availability: open for collaboration</p>
            <p><b>&gt;</b> focus: web development, AI research, interactive systems</p>
            <p><b>&gt;</b> response mode: active</p>
          </div>

          <div className="contact-actions">
            <a href="mailto:hefikristianto@gmail.com">Email</a>
            <a href="https://github.com/hefikristianto" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
