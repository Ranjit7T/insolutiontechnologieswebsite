import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxMj8p5JFTrOilB9DtrXto6QJ5UpqBBSblcNlmbAhyaTAaqKaxT_if7kdd2yTDJd66UPw/exec";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      comments: form.message
    };

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("✨ Thank you. We will get back to you shortly.");
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: ""
        });
      } else {
        setError("❌ Something went wrong. Please try again.");
      }
    } catch {
      setError("❌ Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section id="contact">
      <div className="contact-card">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p className="contact-subtitle">Talk to us ranjit@insolutiontechnologies.in</p>

        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address (optional)"
            value={form.address}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
          />

          <button className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <div className="success-msg">{success}</div>}
          {error && <div className="error-msg">{error}</div>}
        </form>
      </div>
    </section>
  );
}