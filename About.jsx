import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">01 // about me</p>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Building the web, <span>one stack</span> at a time</h2>
            <p>
              I'm a B.Tech Information Technology student at MBIT, CVM University (CGPA: 8.11),
              passionate about full-stack development with the MERN stack. I love building
              real-world products — from hackathon projects to education platforms.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Beyond code, I enjoy attending tech meetups, playing cricket, exploring
              spiritual knowledge, and watching anime. I believe in continuous learning
              and consistent problem-solving.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="hi-icon">🎓</span>
                <span>B.Tech IT — CVM University</span>
              </div>
              <div className="highlight-item">
                <span className="hi-icon">📍</span>
                <span>Surat / Anand, Gujarat</span>
              </div>
              <div className="highlight-item">
                <span className="hi-icon">📧</span>
                <span>vataliyag174@gmail.com</span>
              </div>
              <div className="highlight-item">
                <span className="hi-icon">📱</span>
                <span>+91 8849770674</span>
              </div>
            </div>
            <a href="mailto:vataliyag174@gmail.com" className="btn-primary" style={{ marginTop: "1.5rem" }}>
              Get in Touch →
            </a>
          </div>
          <div className="about-visual">
            <div className="avatar-ring">
              <div className="avatar-inner">RV</div>
            </div>
            <div className="interest-tags">
              {["🏏 Cricket", "🎌 Anime", "⛩️ Spirituality", "💻 Tech Meetups", "🤝 Volunteering"].map(t => (
                <span key={t} className="interest-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
