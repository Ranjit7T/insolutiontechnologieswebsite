import { useEffect, useRef } from "react";

const rings = Array.from({ length: 28 }, (_, index) => index);

export default function Hero() {
  const scene = useRef(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      reducedMotion.current = true;
      return;
    }
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      reducedMotion.current = media.matches;
      scene.current?.style.setProperty("--tilt-x", "0deg");
      scene.current?.style.setProperty("--tilt-y", "0deg");
    };
    syncMotion();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", syncMotion);
      return () => media.removeEventListener("change", syncMotion);
    }
    // Older embedded browsers expose the legacy MediaQueryList API.
    media.addListener?.(syncMotion);
    return () => media.removeListener?.(syncMotion);
  }, []);

  function moveScene(event) {
    if (reducedMotion.current || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    scene.current.style.setProperty("--tilt-x", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -14}deg`);
    scene.current.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 18}deg`);
  }

  function resetScene() {
    scene.current?.style.setProperty("--tilt-x", "0deg");
    scene.current?.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-intro"><span className="eyebrow"><span className="status-dot" /> WEB DEVELOPMENT + SOFTWARE TRAINING</span><span className="hero-location">INDIA / OPEN TO THE WORLD <span aria-hidden="true">↗</span></span></div>
        <div className="hero-stage">
          <div className="hero-copy">
            <span className="hero-kicker">A LITTLE VISION. A LOT OF POSSIBILITY.</span>
            <h1>Think beyond.<br /><span>Build what's</span><br /><em>next.</em><span className="heading-star" aria-hidden="true">✳</span></h1>
            <p>Business websites. Custom software. Practical training.<br className="desktop-break" /> We build digital experiences for your business<br />and real-world technical skills for your future.</p>
            <div className="hero-actions"><a href="#contact" className="btn">Bring your idea to life <span aria-hidden="true">↗</span></a><a href="#training" className="text-link">Explore training <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="portal-area" onPointerMove={moveScene} onPointerLeave={resetScene}>
            <div className="portal-caption"><span className="tiny-cross" aria-hidden="true">+</span><span>WHERE IDEAS TAKE SHAPE</span><span aria-hidden="true">+</span></div>
            <div ref={scene} className="portal-scene" aria-hidden="true"><div className="portal-aura" /><div className="portal-perspective"><div className="portal-geometry">{rings.map(index => <span className="portal-ring" key={index} style={{ "--ring": index }} />)}</div></div><div className="portal-center">i<span>.</span></div><div className="portal-axis axis-one" /><div className="portal-axis axis-two" /></div>
            <div className="portal-label" aria-hidden="true"><span>✳</span>Human ideas.<br />Digital possibilities.</div>
            <div className="portal-controls"><span>IMAGINE <span aria-hidden="true">↗</span> CREATE</span><span className="portal-edition">MADE TO MOVE YOU FORWARD</span></div>
          </div>
        </div>
        <div className="hero-bottom"><a href="#services" className="scroll-link"><span aria-hidden="true">↓</span> DISCOVER WHAT WE DO</a><div className="hero-proof"><span className="proof-icon" aria-hidden="true">✓</span><span>UDYAM registered enterprise<small>Software development + practical learning</small></span></div><span className="hero-index">01 / INFINITE POSSIBILITIES</span></div>
      </section>
      <div className="capability-strip"><div><span>BUILT TO MOVE YOU FORWARD</span><strong>Digital experiences</strong><i aria-hidden="true">✳</i><strong>Custom software</strong><i aria-hidden="true">✳</i><strong>Practical learning</strong><i aria-hidden="true">✳</i><strong>Human thinking</strong></div></div>
    </>
  );
}
