export default function Hero() {
  return (
    <>
      {/* SAME PAGE HERO CSS */}
      <style>{`
        :root{
          --primary:#0b3c5d;
          --accent:#ff9800;
          --text:#1f2933;
        }

        .hero{
          max-width:1200px;
          margin:0 auto;
          padding:120px 20px 100px;
          text-align:center;
        }

        .hero h1{
          font-size:48px;
          font-weight:800;
          color:var(--primary);
          margin-bottom:20px;
        }

        .hero p{
          max-width:780px;
          margin:0 auto 28px;
          font-size:18px;
          line-height:1.7;
          color:#333;
        }

        .hero p strong{
          font-weight:700;
        }

        /* TRUST BADGE */
        .hero-badge{
          display:inline-block;
          background:#fff3e0;
          color:#ff6f00;
          padding:12px 24px;
          border-radius:999px;
          font-weight:600;
          font-size:15px;
          margin-bottom:40px;
        }

        /* BUTTON ROW */
        .hero-actions{
          display:flex;
          justify-content:center;
          gap:18px;
        }

        .hero-btn{
          padding:14px 34px;
          font-size:16px;
          font-weight:600;
          border-radius:8px;
          text-decoration:none;
          display:inline-block;
        }

        .hero-btn.primary{
          background:#0b3c5d;
          color:#fff;
        }

        .hero-btn.secondary{
          background:#ff9800;
          color:#fff;
        }

        /* MOBILE */
        @media(max-width:768px){
          .hero{
            padding:90px 20px 70px;
          }

          .hero h1{
            font-size:32px;
          }

          .hero p{
            font-size:16px;
          }

          .hero-actions{
            flex-direction:column;
            gap:14px;
          }
        }
      `}</style>

      {/* HERO CONTENT */}
      <section className="hero">
        <h1>Building Software. Building Skills.</h1>

        <p>
          Insolution Technologies is an Indian{" "}
          <strong>Web & App Development Company</strong>{" "}
          providing professional software solutions and{" "}
          <strong>training-based, industry-oriented internship programs</strong>{" "}
          for students and freshers.
        </p>

        <div className="hero-badge">
          🇮🇳 UDYAM Registered • Government of India • Skill Development Focus
        </div>

        <div className="hero-actions">
          <a href="#services" className="hero-btn primary">
            Our Services
          </a>
          <a href="#training" className="hero-btn secondary">
            Internship Program
          </a>
        </div>
      </section>
    </>
  );
}
