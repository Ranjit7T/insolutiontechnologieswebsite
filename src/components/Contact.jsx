import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
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

    // ✅ MAP message → comments
    const payload = {
      name: form.name,
      email: form.email,
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
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("❌ Something went wrong. Please try again.");
      }
    } catch {
      setError("❌ Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* SAME PAGE CSS — KEEP AS IS */}
      {/* (your CSS remains unchanged) */}

      <section id="contact">
        <div className="contact-card">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Talk to us before enrolling</p>
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
    </>
  );
}