import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logocompany.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="nav">
        <div className="brand">
          <img src={logo} alt="Insolution Technologies Logo" />
          <span>Insolution Technologies</span>
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>

          <NavLink to="/#services" onClick={() => setOpen(false)}>
            Services
          </NavLink>

          <NavLink to="/#training" onClick={() => setOpen(false)}>
            Training & Internship
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About Us
          </NavLink>

          <NavLink to="/#contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
