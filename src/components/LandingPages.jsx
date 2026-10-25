import { Link } from "react-router-dom";
import Services from "./Services";
import Training from "./Training";
import Contact from "./Contact";
import FAQ from "./FAQ";

export function PageIntro({ label, title, children }) {
  return <section className="page-intro">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>
    <span className="eyebrow">INSOLUTION TECHNOLOGIES</span>
    <h1>{title}</h1>
    {children && <p>{children}</p>}
  </section>;
}

export function ServicesPage() {
  return <>
    <PageIntro label="Services" title="Web & custom software development.">Business websites, web applications and software shaped around the way you work. Explore our development and maintenance services.</PageIntro>
    <Services />
    <section className="enquiry-guide">
      <span className="eyebrow">START WITH YOUR BUSINESS NEEDS</span>
      <h2>Tell us what you want to build.</h2>
      <p>A business website can introduce your services, while a web application can support day-to-day operations. Custom CRM, ERP and automation tools can bring specific workflows together. If you already have software, ask about updates, maintenance and ongoing support.</p>
      <p>To start a conversation, share your goals, who will use the product, the features you have in mind and any existing systems it needs to work with. Include your preferred timeline and budget so we can discuss the scope with you.</p>
      <Link to="/contact/" className="btn">Discuss your project <span aria-hidden="true">↗</span></Link>
    </section>
  </>;
}

export function TrainingPage() {
  return <>
    <PageIntro label="Training & internships" title="Practical software training. Real project exposure.">Explore structured 3-month and 6-month skill development programs for students and freshers. These are paid training programs with internship exposure as part of the learning process.</PageIntro>
    <Training />
    <section className="enquiry-guide">
      <span className="eyebrow">BEFORE YOU ENROL</span>
      <h2>Choose your next step with clarity.</h2>
      <p>The 3-month Skill Development Program covers core technical training, guided internal projects and industry-style development practices. The 6-month Advanced Skill Program adds advanced concepts, project-based practical exposure and GitHub workflows. Both include an internship completion certificate.</p>
      <p>Training fees are ₹14,999 and ₹27,999 respectively. These programs do not guarantee employment or job placement. Ask about the program content, schedule and suitability for your current skills, and review the terms and conditions before paying.</p>
      <Link to="/contact/" className="btn">Ask about training <span aria-hidden="true">↗</span></Link>
    </section>
    <FAQ />
  </>;
}

export function ContactPage() {
  return <>
    <PageIntro label="Contact" title="Contact Insolution Technologies.">Talk to us about business software, a new website or practical technical training. Send your enquiry using the form below or contact us directly by email.</PageIntro>
    <Contact />
  </>;
}

export function NotFoundPage() {
  return <section className="page-intro not-found">
    <span className="eyebrow">404 / PAGE NOT FOUND</span>
    <h1>Let's find your next step.</h1>
    <p>This address does not match a page on our site. Explore our services, view our training programs or return to the homepage.</p>
    <div className="hero-actions"><Link to="/" className="btn">Back to home <span aria-hidden="true">↗</span></Link><Link to="/services/" className="text-link">Explore services</Link></div>
  </section>;
}
