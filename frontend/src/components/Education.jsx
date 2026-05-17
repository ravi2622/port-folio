import "./Education.css";

const edu = [
  {
    degree: "B.Tech — Information Technology",
    school: "Madhuben and Bhanubhai Patel Institute of Technology (MBIT), CVM University",
    location: "Anand, Gujarat",
    period: "Oct 2023 – Mar 2027",
    grade: "CGPA: 8.11",
    icon: "🎓",
    current: true,
  },
  {
    degree: "Higher Secondary Education (12th)",
    school: "Kaushal Vidhya Bhavan School",
    location: "Surat, Gujarat",
    period: "Jun 2021 – May 2023",
    grade: "57.38%",
    icon: "📚",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container education-container">
        <p className="section-label">04 // education</p>
        <h2 className="section-title education-title">
          My <span>academic</span> journey
        </h2>
        <div className="edu-timeline" role="list">
          {edu.map((e, index) => (
            <article
              key={e.degree}
              className={`edu-item ${e.current ? "is-current" : ""}`}
              role="listitem"
              style={{ "--edu-index": index }}
            >
              <div className="edu-track" aria-hidden="true">
                <span className="edu-icon">{e.icon}</span>
                {index < edu.length - 1 && <span className="edu-line" />}
              </div>
              <div className={`card edu-card ${e.current ? "current" : ""}`}>
                {e.current && <span className="current-badge">Currently Studying</span>}
                <div className="edu-header">
                  <h3 className="edu-degree">{e.degree}</h3>
                  <span className="edu-grade">{e.grade}</span>
                </div>
                <p className="edu-school">{e.school}</p>
                <div className="edu-meta">
                  <span className="edu-meta-item">📍 {e.location}</span>
                  <span className="edu-meta-item">📅 {e.period}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
