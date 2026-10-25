export const faqItems = [
  {
    question: "What software development services does Insolution Technologies offer?",
    answer:
      "We develop business websites, portfolios, landing pages, web applications, dashboards, and internal business tools. Our custom software services include CRM, ERP, and automation solutions, with maintenance and technical support available beyond launch.",
  },
  {
    question: "What are the training program durations and fees?",
    answer:
      "The 3 Month Skill Development Program has a training fee of INR 14,999. The 6 Month Advanced Skill Program has a training fee of INR 27,999. Both include guided practical learning and an internship completion certificate. Review the program details and terms before enrolling.",
  },
  {
    question: "Are the internship programs paid jobs or training programs?",
    answer:
      "These are paid, training-focused programs for students and freshers, not paid employment. Students pay training fees, and internship exposure forms part of the learning process through technical training, projects, and professional development practices.",
  },
  {
    question: "How will this internship help me?",
    answer:
      "The program helps you apply classroom knowledge through guided projects, strengthen your technical and problem-solving skills, and practise industry-style development workflows. Depending on your chosen program, you can also learn GitHub workflows and development best practices. This hands-on experience can help you explain your project work in interviews and approach future technical tasks with greater confidence. You also receive an internship completion certificate on completing the program.",
  },
  {
    question: "Is this internship suitable for final-year students?",
    answer:
      "Yes. Final-year students can build practical technical skills through guided projects and industry-style development practices. The experience can help you connect academic learning with software development, discuss your project work in interviews, and prepare for future technical roles. An internship completion certificate is included on completing the program. Before enrolling, confirm with your college that the program duration and certificate meet its academic internship requirements.",
  },
  {
    question: "How can I enquire about a project or training program?",
    answer:
      "Use the contact form to describe your software project or ask about a training program. You can also email ranjit@insolutiontechnologies.in. For a project enquiry, include your goals and the kind of website or software you need; for training, mention the program you are interested in.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="section-heading">
        <div>
          <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2 id="faq-heading">A little clarity.<br /><span>A confident next step.</span></h2>
        </div>
        <p>Answers about our development services, practical training, and how to get started.</p>
      </div>
      <div className="faq-grid">
        {faqItems.map(({ question, answer }) => (
          <details key={question} className="faq-item">
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
