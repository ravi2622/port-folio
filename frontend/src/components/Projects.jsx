import "./Projects.css";

const projects = [
  {
    name: "OneFlow",
    tagline: "Plan to Bill in One Place",
    date: "Nov 2025",
    badge: "🏆 Hackathon",
    description:
      "A full-stack MERN workflow management platform for project planning, task management, timesheets, and billing. Features JWT-based role-based access control, analytics dashboards, and financial insights.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: ["JWT Auth + RBAC", "Timesheet & Billing", "Analytics Dashboard", "REST APIs"],
    github: "https://github.com/ravi2622",
    live: "#",
    accent: "#7c6af0",
  },
  {
    name: "Smart-EDU",
    tagline: "Education Management Platform",
    date: "Mar 2025",
    badge: "📚 EdTech",
    description:
      "A web-based education management platform to manage courses and students. Built with Node.js + Express.js + MongoDB. Implements RESTful APIs and CRUD operations for learning resources.",
    tags: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    highlights: ["Course Management", "Student Tracking", "RESTful APIs", "CRUD Operations"],
    github: "https://github.com/ravi2622",
    live: "#",
    accent: "#4ade80",
  },
  {
    name: "WanderLust",
    tagline: "Property Listing & Travel Platform",
    date: "Jul 2024",
    badge: "🌍 Travel",
    description:
      "A fully functional, responsive traveling website connecting property owners with travelers. Users can list rental properties with user authentication and secure data transactions.",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "CSS"],
    highlights: ["Property Listings", "User Authentication", "Secure Transactions", "Responsive UI"],
    github: "https://github.com/ravi2622",
    live: "#",
    accent: "#f59e0b",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">03 // projects</p>
        <h2 className="section-title">Things I've <span>built</span></h2>
        <div className="projects-list">
          {projects.map((p, i) => (
            <div key={p.name} className="project-card card" style={{ "--pAccent": p.accent }}>
              <div className="project-top">
                <div className="project-meta">
                  <span className="project-badge">{p.badge}</span>
                  <span className="project-date">{p.date}</span>
                </div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    GitHub ↗
                  </a>
                  {p.live !== "#" && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="project-link live">
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="project-number">0{i + 1}</div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.description}</p>
              <div className="project-highlights">
                {p.highlights.map((h) => (
                  <span key={h} className="project-hl">✦ {h}</span>
                ))}
              </div>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
