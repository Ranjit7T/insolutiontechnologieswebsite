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
    if (loading) return;
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

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();

      if (data.success) {
        setSuccess("Thank you. We will get back to you shortly.");
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: ""
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (requestError) {
      setError(requestError.name === "AbortError"
        ? "The request timed out. Please try again or email us directly."
        : "Your message could not be sent. Please try again or email us directly.");
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  };

  const submitLabel = loading ? "Sending..." : "Send Message";

  return (
    <section id="contact">
      <div className="contact-card">
        <div className="section-title">
          <span className="eyebrow">LET&#8217;S MAKE IT HAPPEN</span>
          <h2>A new project.<br /><span>A new possibility.</span></h2>
          <p>Have a business idea or a question about our training programs? Tell us a little about yourself and what you have in mind.</p>
          <a className="contact-email" href="mailto:ranjit@insolutiontechnologies.in">ranjit@insolutiontechnologies.in &#8599;</a>
          <p>Based in India. Open to possibilities everywhere.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" aria-busy={loading}>
          <label htmlFor="contact-name">Your name
          <input id="contact-name" autoComplete="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          </label>

          <label htmlFor="contact-email">Email address
          <input id="contact-email" autoComplete="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          </label>

          <label htmlFor="contact-phone">Phone number (optional)
          <input id="contact-phone" autoComplete="tel"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          </label>

          <label htmlFor="contact-address">Address (optional)
          <input id="contact-address" autoComplete="street-address"
            type="text"
            name="address"
            placeholder="Address (optional)"
            value={form.address}
            onChange={handleChange}
          />
          </label>

          <label htmlFor="contact-message">How can we help?
          <textarea id="contact-message" rows={4}
            name="message"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
          />

          </label>
          <p className="form-note">We will use these details to respond to your enquiry.</p>
          <button type="submit" className="btn" disabled={loading} aria-label={submitLabel}>
            {submitLabel}
            <span aria-hidden="true">&#8599;</span>
          </button>

          {loading && <div role="status" className="form-note">Sending your enquiry...</div>}
          {success && <div role="status" className="success-msg">{success}</div>}
          {error && <div role="alert" className="error-msg">{error}</div>}
        </form>
      </div>
    </section>
  );
}
