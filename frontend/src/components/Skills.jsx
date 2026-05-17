import "./Skills.css";

const skillGroups = [
  {
    label: "Languages",
    icon: "🖥️",
    skills: ["JavaScript", "Java", "C++", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    icon: "⚙️",
    skills: ["React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS", "EJS"],
  },
  {
    label: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL"],
  },
  {
    label: "Developer Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    label: "Concepts",
    icon: "💡",
    skills: ["Data Structures & Algorithms", "OOP", "REST APIs", "DBMS", "Operating Systems"],
  },
  {
    label: "Soft Skills",
    icon: "🌟",
    skills: ["Adaptability", "Calmness", "Consistency", "Problem-Solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg2)" }}>
      <div className="container">
        <p className="section-label">02 // skills</p>
        <h2 className="section-title">Tech I <span>work with</span></h2>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div key={g.label} className="card skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{g.icon}</span>
                <h3 className="skill-group-title">{g.label}</h3>
              </div>
              <div className="skill-tags">
                {g.skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
