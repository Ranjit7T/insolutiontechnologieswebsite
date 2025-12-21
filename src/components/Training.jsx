export default function Training() {
  return (
    <>
      {/* SAME PAGE CSS */}
      <style>{`
        #training{
          max-width:1200px;
          margin:0 auto;
          padding:80px 20px;
          color:#1f2933;
        }

        .section-title{
          text-align:center;
          margin-bottom:40px;
        }

        .section-title h2{
          font-size:32px;
          color:#0b3c5d;
          margin-bottom:6px;
        }

        .section-title strong{
          font-size:16px;
          color:#444;
          font-weight:600;
        }

        #training p{
          max-width:860px;
          margin:0 auto 28px;
          font-size:17px;
          line-height:1.7;
          color:#333;
          text-align:center;
        }

        /* TRANSPARENCY HIGHLIGHT */
        .highlight{
          background:#fff8f8;
          border-left:5px solid #e53935;
          padding:20px 24px;
          border-radius:8px;
          margin:30px auto;
          max-width:920px;
          font-size:15px;
          line-height:1.6;
        }

        /* GRID */
        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:28px;
          margin-top:40px;
        }

        .card{
          background:#f4f6f8;
          padding:30px;
          border-radius:12px;
        }

        .card h3{
          color:#0b3c5d;
          margin-bottom:12px;
          font-size:20px;
        }

        .card p{
          font-size:15px;
          line-height:1.7;
          color:#333;
        }

        /* TRUST NOTE */
        .trust-note{
          background:#eef6ff;
          border-left:5px solid #0b3c5d;
          padding:22px 24px;
          border-radius:8px;
          margin:40px auto 0;
          max-width:920px;
          font-size:15px;
          line-height:1.7;
        }

        @media(max-width:768px){
          .section-title h2{
            font-size:26px;
          }

          #training p{
            font-size:16px;
          }
        }
      `}</style>

      {/* TRAINING CONTENT */}
      <section id="training">
        <div className="section-title">
          <h2>Training & Industry-Oriented Internship</h2>
          <strong>Structured skill development for students & freshers</strong>
        </div>

        <p>
          Insolution Technologies is an <strong>UDYAM Registered enterprise</strong>{" "}
          under the <strong>Government of India</strong>.  
          Our training programs are designed with guidance from{" "}
          <strong>industry professionals who have worked on large-scale,
          enterprise-level systems</strong>, including experience within{" "}
          <strong>global media and technology organizations</strong>.
        </p>
        <p>
          This exposure helps us shape a <strong>real-world, professional learning approach</strong>{" "}
          — focusing on industry standards, development discipline, and practical
          confidence rather than classroom theory alone.
        </p>

        <div className="highlight">
          <strong>Important Transparency Note:</strong><br />
          • This is a <strong>training-focused program</strong>, not a job<br />
          • We charge <strong>training fees only</strong><br />
          • Internship exposure is part of the learning process<br />
          • No employment, salary, or placement is promised
        </div>

        <div className="grid">
          <div className="card">
            <h3>3-Month Skill Development Program</h3>
            <p>
              ✔ Core technical training<br />
              ✔ Guided internal projects<br />
              ✔ Industry-style development practices<br />
              ✔ Internship completion certificate<br />
              <strong>Training Fee: ₹14,999</strong>
            </p>
          </div>

          <div className="card">
            <h3>6-Month Advanced Skill Program</h3>
            <p>
              ✔ Advanced technical concepts<br />
              ✔ Project-based practical exposure<br />
              ✔ GitHub, workflows & best practices<br />
              ✔ Internship completion certificate<br />
              <strong>Training Fee: ₹27,999</strong>
            </p>
          </div>
        </div>

        
      </section>
    </>
  );
}