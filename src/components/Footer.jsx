import logo from "../assets/logocompany.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const dialog = useRef(null);
  const termsButton = useRef(null);

  useEffect(() => {
    if (!showTerms) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.current?.open) dialog.current?.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      termsButton.current?.focus({ preventScroll: true });
    };
  }, [showTerms]);

  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const outsideDialog =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (outsideDialog) setShowTerms(false);
  };

  return (
    <>
      <footer>
        <div className="footer-inner">
          <span className="eyebrow footer-eyebrow">
            THE NEXT CHAPTER STARTS WITH A CONVERSATION
          </span>
          <div className="footer-invitation">
            <h2>Something great.<br /><span>Starts with a hello.</span></h2>
            <Link to="/contact/" className="footer-contact">
              <span>Let's create<br />what's next.</span><span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="footer-top">
            <div>
              <Link to="/" className="footer-brand" aria-label="Insolution Technologies home">
                <span className="brand-mark" aria-hidden="true">
                  <img src={logo} alt="" />
                </span>
              </Link>
              <p>
                Thoughtful software. Practical skills.<br />
                Building what comes next, together.
              </p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link to="/services/">Services</Link>
              <Link to="/training/">Training & internship</Link>
              <Link to="/about/">About us</Link>
              <Link to="/contact/">Get in touch &#8599;</Link>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Insolution Technologies. All rights reserved.</span>
            <button
              ref={termsButton}
              type="button"
              onClick={() => setShowTerms(true)}
              className="terms-button"
              aria-haspopup="dialog"
              aria-controls="terms-dialog"
              aria-expanded={showTerms}
            >
              Terms & Conditions
            </button>
            <span>Built with purpose, in India.</span>
          </div>
        </div>
      </footer>

      {showTerms && (
        <dialog
          ref={dialog}
          id="terms-dialog"
          className="terms-modal"
          aria-labelledby="terms-title"
          onCancel={() => setShowTerms(false)}
          onClose={() => setShowTerms(false)}
          onClick={handleBackdropClick}
        >
          <button
            type="button"
            className="close-button"
            aria-label="Close terms and conditions"
            autoFocus
            onClick={() => setShowTerms(false)}
          >
            &#215;
          </button>
          <div className="terms-content">
            <h2 id="terms-title">TERMS & CONDITIONS - NON-REFUNDABLE FEES</h2>
            <p className="company-info">
              <strong>INSOLUTIONS TECHNOLOGIES</strong><br />
              MSME (Udyam) Registered Company
            </p>
            <section>
              <h3>1. Fee Policy</h3>
              <p>
                All fees paid to INSOLUTIONS TECHNOLOGIES for any services,
                training programs, internships, projects, or consultancy are
                strictly non-refundable and non-transferable under any circumstances.
              </p>
            </section>
            <section>
              <h3>2. No Refund Clause</h3>
              <p>
                Once the payment is made, no refund shall be issued for any reason
                including but not limited to:
              </p>
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
              <p>
                INSOLUTIONS TECHNOLOGIES commits to providing the services as
                described at the time of enrollment. Completion of services depends
                on client participation, cooperation, and adherence to guidelines.
              </p>
            </section>
            <section>
              <h3>4. No Guarantee Clause</h3>
              <p>
                INSOLUTIONS TECHNOLOGIES does not guarantee job placement, salary,
                employment confirmation, or approval of certificates by third-party organizations.
              </p>
            </section>
            <section>
              <h3>5. Legal Jurisdiction</h3>
              <p>All disputes shall be subject to the jurisdiction of courts in India only.</p>
            </section>
            <section>
              <h3>6. Acceptance of Terms</h3>
              <p>
                By making the payment, the client/student acknowledges and agrees
                to all the above Terms & Conditions.
              </p>
            </section>
          </div>
        </dialog>
      )}
    </>
  );
}
