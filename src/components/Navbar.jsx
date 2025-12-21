import logo from "../assets/logocompany.jpg";

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="Insolution Technologies Logo"
            style={{ height: "36px", width: "auto" }}
          />
          <span style={{ fontSize: "18px", fontWeight: "600", color: "#0b3c5d" }}>
            Insolution Technologies
          </span>
        </div>

        <div>
          <a href="#services">Services</a>
          <a href="#training">Training & Internship</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
