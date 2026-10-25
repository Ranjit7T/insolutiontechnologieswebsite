const services = [
  {
    number: "01",
    title: "Website development",
    description: "A strong first impression, built to last. Business websites, portfolios, and landing pages that work beautifully across devices.",
    note: "Responsive by design",
  },
  {
    number: "02",
    title: "Web applications",
    description: "Turn complex workflows into simple experiences with tailored dashboards, admin panels, and internal business tools.",
    note: "Built around your workflow",
  },
  {
    number: "03",
    title: "Custom software",
    description: "Software that fits the way you work. Connect your operations with custom CRM, ERP, and automation solutions.",
    note: "Solutions that fit your business",
  },
  {
    number: "04",
    title: "Maintenance & support",
    description: "Keep your digital products moving forward with ongoing updates, dependable maintenance, and long-term technical support.",
    note: "Support beyond launch",
  },
];

function ServiceIcon({ number }) {
  const paths = {
    "01": <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13l-2 2 2 2m8-4 2 2-2 2m-3-5-2 6" /></>,
    "02": <><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></>,
    "03": <><rect x="8" y="8" width="8" height="8" rx="2" /><path d="M12 3v5m0 8v5M3 12h5m8 0h5M5 5l4 4m6 6 4 4m0-14-4 4M9 15l-4 4" /></>,
    "04": <><path d="M12 3 4 6v6c0 4 4 7 8 9 4-2 8-5 8-9V6l-8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[number]}
    </svg>
  );
}

function ServiceArt({ number }) {
  return (
    <div className={`service-art service-art-${number}`} aria-hidden="true">
      {number === "01" && (
        <div className="service-preview preview-browser">
          <div className="preview-toolbar"><i /><i /><i /><span /></div>
          <div className="preview-layout">
            <div className="preview-nav"><span /><span /><span /></div>
            <div className="preview-lines"><span /><span /><span /></div>
            <div className="preview-button" />
            <div className="preview-feature"><span /><span /><span /></div>
          </div>
        </div>
      )}
      {number === "02" && (
        <div className="service-preview preview-dashboard">
          <div className="preview-toolbar"><i /><i /><i /><span /></div>
          <div className="preview-panels">
            <span className="preview-panel preview-panel-chart">
              <svg viewBox="0 0 120 56" fill="none" focusable="false"><path d="M5 49 22 35 39 40 57 19 76 26 94 11 115 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span className="preview-panel preview-panel-bars"><i /><i /><i /><i /><i /></span>
            <span className="preview-panel preview-panel-lines"><i /><i /><i /></span>
          </div>
        </div>
      )}
      {number === "03" && (
        <div className="preview-network">
          <svg viewBox="0 0 240 150" fill="none" focusable="false">
            <path className="preview-connections" d="M120 75 45 35m75 40 75-40m-75 40-75 40m75-40 75 40M45 35v80m150-80v80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" />
            <rect className="preview-node" x="28" y="18" width="34" height="34" rx="10" fill="currentColor" />
            <rect className="preview-node" x="178" y="18" width="34" height="34" rx="10" fill="currentColor" />
            <rect className="preview-node" x="28" y="98" width="34" height="34" rx="10" fill="currentColor" />
            <rect className="preview-node" x="178" y="98" width="34" height="34" rx="10" fill="currentColor" />
            <rect className="preview-node-core" x="94" y="49" width="52" height="52" rx="15" fill="currentColor" />
            <path className="preview-node-symbol" d="m113 67-8 8 8 8m14-16 8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      {number === "04" && (
        <div className="preview-status">
          <svg className="preview-check" viewBox="0 0 120 120" fill="none" focusable="false">
            <circle className="preview-status-track" cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="1" />
            <circle className="preview-status-ring" cx="60" cy="60" r="36" stroke="currentColor" strokeWidth="3" strokeDasharray="175 52" strokeLinecap="round" />
            <path d="m43 60 12 12 23-25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="preview-status-lines"><span /><span /><span /></div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      <div className="section-heading">
        <div>
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Built for your business.<br /><span>Designed for people.</span></h2>
        </div>
        <p>From your first website to the tools that power your operations, we help you make technology work for you.</p>
      </div>
      <div className="service-grid">
        {services.map(({ number, title, description, note }) => (
          <a href="/contact/" className="service-card" key={number}>
            <ServiceArt number={number} />
            <div className="card-top">
              <span className="service-icon"><ServiceIcon number={number} /></span>
              <span>{number}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="card-bottom">
              {note}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12" /></svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
