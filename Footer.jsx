import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          <span className="logo-bracket">&lt;</span>RV<span className="logo-bracket">/&gt;</span>
        </span>
        <p className="footer-copy">
          Built with <span style={{ color: "#7c6af0" }}>MERN Stack</span> by Ravi Vataliya © {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="https://github.com/ravi2622" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ravi-vataliya-220a2a251/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:vataliyag174@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
