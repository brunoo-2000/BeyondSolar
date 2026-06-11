document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  // Animación de títulos al hacer scroll
  document.querySelectorAll("section h2").forEach(h => {
    const split = new SplitText(h, { type: "chars" });
    gsap.from(split.chars, {
      scrollTrigger: { trigger: h, start: "top 85%" },
      opacity: 0, y: 20, stagger: 0.03, duration: 0.4, ease: "power2.out"
    });
  });

  // Cards aparecen al hacer scroll
  gsap.from(".metodo-card-wrap", {
    scrollTrigger: { trigger: ".metodo-card-wrap", start: "top 85%" },
    opacity: 0, y: 40, stagger: 0.15, duration: 0.7, ease: "power2.out"
  });

  // ── Animación 1: Tránsito ─────────────────────────────────────
  const c1 = document.getElementById("canvas-transito").getContext("2d");
  let t1 = 0;
  function animTransito() {
    c1.clearRect(0, 0, 260, 140);
    // Estrella
    c1.beginPath();
    c1.arc(130, 60, 30, 0, Math.PI * 2);
    c1.fillStyle = "#f59e0b";
    c1.fill();
    // Planeta orbitando
    const px = 130 + 80 * Math.cos(t1);
    const py = 60 + 20 * Math.sin(t1);
    c1.beginPath();
    c1.arc(px, py, 8, 0, Math.PI * 2);
    c1.fillStyle = "#60a5fa";
    c1.fill();
    // Curva de luz (baja cuando el planeta tapa la estrella)
    const tapaEstrella = Math.abs(px - 130) < 38 && Math.sin(t1) < 0;
    const brillo = tapaEstrella ? 0.6 : 1.0;
    c1.fillStyle = `rgba(245,158,11,${brillo * 0.3})`;
    c1.fillRect(0, 110, 260, 25);
    c1.fillStyle = "#fde68a";
    c1.fillRect(0, 110, 260 * brillo, 4);
    t1 += 0.03;
    requestAnimationFrame(animTransito);
  }
  animTransito();

  // ── Animación 2: Velocidad Radial ─────────────────────────────
  const c2 = document.getElementById("canvas-radial").getContext("2d");
  let t2 = 0;
  function animRadial() {
    c2.clearRect(0, 0, 260, 140);
    const wobble = 10 * Math.cos(t2);
    // Estrella oscilando
    c2.beginPath();
    c2.arc(130 + wobble, 65, 22, 0, Math.PI * 2);
    c2.fillStyle = "#f59e0b";
    c2.fill();
    // Planeta (opuesto)
    const px = 130 - 70 * Math.cos(t2);
    const py = 65 + 18 * Math.sin(t2);
    c2.beginPath();
    c2.arc(px, py, 7, 0, Math.PI * 2);
    c2.fillStyle = "#a78bfa";
    c2.fill();
    // Flecha de velocidad
    const vx = wobble > 0 ? 1 : -1;
    c2.strokeStyle = vx > 0 ? "#f87171" : "#60a5fa";
    c2.lineWidth = 2;
    c2.beginPath();
    c2.moveTo(130 + wobble, 65);
    c2.lineTo(130 + wobble + vx * 25, 65);
    c2.stroke();
    // Label Doppler
    c2.fillStyle = vx > 0 ? "#f87171" : "#60a5fa";
    c2.font = "10px Space Grotesk";
    c2.fillText(vx > 0 ? "→ rojo" : "← azul", 110, 120);
    t2 += 0.04;
    requestAnimationFrame(animRadial);
  }
  animRadial();

  // ── Animación 3: Imagen Directa ───────────────────────────────
  const c3 = document.getElementById("canvas-imagen").getContext("2d");
  let t3 = 0;
  function animImagen() {
    c3.clearRect(0, 0, 260, 140);
    // Planeta orbitando
    const px = 130 + 70 * Math.cos(t3);
    const py = 70 + 20 * Math.sin(t3);
    c3.beginPath();
    c3.arc(px, py, 8, 0, Math.PI * 2);
    c3.fillStyle = "#fb923c";
    c3.fill();
    // Disco coronógrafo (tapa la estrella)
    c3.beginPath();
    c3.arc(130, 70, 28, 0, Math.PI * 2);
    c3.fillStyle = "#1f2937";
    c3.fill();
    c3.strokeStyle = "rgba(255,255,255,0.2)";
    c3.lineWidth = 1.5;
    c3.stroke();
    c3.fillStyle = "#6b7280";
    c3.font = "8px Space Grotesk";
    c3.textAlign = "center";
    c3.fillText("coronógrafo", 130, 73);
    t3 += 0.025;
    requestAnimationFrame(animImagen);
  }
  animImagen();
});
