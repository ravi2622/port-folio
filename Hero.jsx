import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" />
      <div className="hero-glow hero-glow-2" />
      <div className="container hero-inner">
        <div className="hero-content fade-up">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ravi</span>
            <br />
            <span className="hero-role">Full Stack Developer</span>
          </h1>
          <p className="hero-sub">
            Specializing in <span className="tag">MERN Stack</span> — building scalable web apps
            and RESTful APIs that power real products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}); }}>
              View Projects ↓
            </a>
            <a
              href="https://github.com/ravi2622"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-vataliya-220a2a251/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">8.11</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">MERN</span>
              <span className="stat-label">Stack</span>
            </div>
          </div>
        </div>
        <div className="hero-visual fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="code-card">
            <div className="code-card-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-file">ravi.js</span>
            </div>
            <pre className="code-body">{`const ravi = {
  role: "Full Stack Dev",
  stack: ["MongoDB", "Express",
          "React", "Node.js"],
  skills: ["JWT Auth", "REST APIs",
           "DSA", "OOP"],
  open_to: "New Opportunities",
  
  build: (idea) => {
    return scalableApp(idea);
  }
};`}</pre>
          </div>
          <div className="floating-chips">
            {["React", "Node.js", "MongoDB", "Express", "JWT", "REST API"].map((chip, i) => (
              <span
                key={chip}
                className="chip"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
