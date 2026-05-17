import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">05 // contact</p>
        <h2 className="section-title">Let's <span>connect</span></h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              I'm open to internships, freelance projects, and full-time opportunities.
              Drop me a message — I usually respond within 24 hours!
            </p>
            <div className="contact-links">
              <a href="mailto:vataliyag174@gmail.com" className="contact-item">
                <span className="contact-item-icon">📧</span>
                <div>
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-val">vataliyag174@gmail.com</span>
                </div>
              </a>
              <a href="tel:+918849770674" className="contact-item">
                <span className="contact-item-icon">📱</span>
                <div>
                  <span className="contact-item-label">Phone</span>
                  <span className="contact-item-val">+91 8849770674</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ravi-vataliya-220a2a251/" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">💼</span>
                <div>
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-val">ravi-vataliya</span>
                </div>
              </a>
              <a href="https://github.com/ravi2622" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">🐙</span>
                <div>
                  <span className="contact-item-label">GitHub</span>
                  <span className="contact-item-val">ravi2622</span>
                </div>
              </a>
            </div>
          </div>
          <form className="contact-form card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="What's on your mind?"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            {status === "success" && (
              <p className="form-status success">✅ Message sent! I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="form-status error">❌ Something went wrong. Please try again.</p>
            )}
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Sending…" : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
