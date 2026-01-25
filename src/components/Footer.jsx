import { useState } from 'react';

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer>
        <p>
          © 2026 Insolution Technologies <br />
          Web & App Development | Training & Industry Internship
        </p>
        <button 
          onClick={() => setShowTerms(true)}
          className="terms-button"
        >
          Terms & Conditions
        </button>
      </footer>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="terms-modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="terms-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={() => setShowTerms(false)}
            >
              ✕
            </button>
            <div className="terms-content">
              <h2>TERMS & CONDITIONS – NON-REFUNDABLE FEES</h2>
              <p className="company-info">
                <strong>INSOLUTIONS TECHNOLOGIES</strong><br />
                MSME (Udyam) Registered Company
              </p>

              <section>
                <h3>1. Fee Policy</h3>
                <p>All fees paid to INSOLUTIONS TECHNOLOGIES for any services, training programs, internships, projects, or consultancy are strictly non-refundable and non-transferable under any circumstances.</p>
              </section>

              <section>
                <h3>2. No Refund Clause</h3>
                <p>Once the payment is made, no refund shall be issued for any reason including but not limited to:</p>
                <ul>
                  <li>Change of mind</li>
                  <li>Personal reasons</li>
                  <li>Schedule issues</li>
                  <li>Non-attendance</li>
                  <li>Discontinuation of service</li>
                  <li>Technical issues from the client side</li>
                  <li>Dissatisfaction after enrollment</li>
                </ul>
              </section>

              <section>
                <h3>3. Service Commitment</h3>
                <p>INSOLUTIONS TECHNOLOGIES commits to providing the services as described at the time of enrollment. Completion of services depends on client participation, cooperation, and adherence to guidelines.</p>
              </section>

              <section>
                <h3>4. No Guarantee Clause</h3>
                <p>INSOLUTIONS TECHNOLOGIES does not guarantee job placement, salary, employment confirmation, or approval of certificates by third-party organizations.</p>
              </section>

              <section>
                <h3>5. Legal Jurisdiction</h3>
                <p>All disputes shall be subject to the jurisdiction of courts in India only.</p>
              </section>

              <section>
                <h3>. Acceptance of Terms</h3>
                <p>By making the payment, the client/student acknowledges and agrees to all the above Terms & Conditions.</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
