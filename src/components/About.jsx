import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section id="about">

      {/* PAGE HEADER */}
      <div className="section-title">
        <h2>About Insolution Technologies</h2>
        <p>
          Empowering students with affordable, practical, and career-focused
          internship programs designed for real-world success.
        </p>
      </div>

      {/* WHO WE ARE + VISION */}
      <div className="grid">
        <div className="card">
          <h3>Who We Are</h3>
          <p>
            Insolution Technologies is built on one strong belief —
            <strong> quality learning should be accessible to everyone</strong>.
          </p>
          <p>
            We bridge the gap between academics and industry by offering
            hands-on internships, real-world projects, and mentor-driven learning
            that prepares students for modern professional environments.
          </p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To help students gain <strong>confidence, clarity, and career readiness</strong>
            through affordable and industry-aligned learning experiences.
          </p>
          <p>
            We focus on outcomes — practical skills, real exposure, and
            employability — not just certificates.
          </p>
        </div>
      </div>

      {/* FOUNDER MESSAGE */}
      <div className="highlight">
        <h3>Founder’s Message</h3>

        <p style={{ marginTop: "10px" }}>
          “During my professional journey as a <strong>Senior Software Developer</strong>,
          including my experience working with the <strong>USA TODAY Network</strong>,
          I observed a consistent gap between academic learning and real-world industry expectations.
        </p>

        <p style={{ marginTop: "10px" }}>
          Many students possess strong theoretical knowledge but lack hands-on exposure,
          practical confidence, and guidance. Additionally, high-cost training programs
          often limit access to quality learning.
        </p>

        <p style={{ marginTop: "10px" }}>
          I founded <strong>Insolution Technologies</strong> to solve this problem —
          by creating an ecosystem that delivers
          <strong> affordable, practical, and industry-relevant internships</strong>
          guided by real professional experience.”
        </p>

        <p style={{ marginTop: "15px", fontWeight: "600" }}>
          — Ranjit Ramesh <br />
          Founder & Senior Software Developer <br />
          Formerly associated with USA TODAY Network
        </p>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <span className="badge">Start Your Career With Confidence</span>
        <div>
          {/* ✅ FIXED LINKS (WORK FROM /about) */}
          <NavLink to="/#training" className="btn">
            Explore Internships
          </NavLink>

          <NavLink to="/#contact" className="btn alt">
            Talk to Us
          </NavLink>
        </div>
      </div>

    </section>
  );
}