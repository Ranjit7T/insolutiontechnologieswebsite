import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/logocompany.png";

const links = [
  ["/", "Home"],
  ["/services/", "Services"],
  ["/training/", "Training & internship"],
  ["/about/", "About us"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" aria-label="Insolution Technologies home" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><img src={logo} alt="" /></span>
        </Link>
        <button ref={menuButton} type="button" className="menu-btn" aria-expanded={open} aria-controls="navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((previous) => !previous)}>
          <span aria-hidden="true">{open ? "\u2715" : "\u2630"}</span>
        </button>
        <div id="navigation" className={`nav-links ${open ? "show" : ""}`}>
          {links.map(([to, label]) => (
            <Link key={to} to={to} className={(pathname.replace(/\/+$/, "") || "/") === (to.replace(/\/+$/, "") || "/") && !hash ? "active" : ""} aria-current={(pathname.replace(/\/+$/, "") || "/") === (to.replace(/\/+$/, "") || "/") && !hash ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link to="/contact/" className="nav-cta" onClick={() => setOpen(false)}>Let&#8217;s talk <span aria-hidden="true">&#8599;</span></Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
