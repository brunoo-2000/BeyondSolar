
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);

  
  let tl = gsap.timeline();
  tl.from(".hero-title", {
    y: 80,
    opacity: 0,
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 2,
    ease: "power3.out",

  });

  let tl2 = gsap.timeline();
  tl.from(".hero-subtext", {
    y: 80,
    opacity: 0,
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 0.2,
    ease: "power3.out",
  });
  
});

// Animación de las secciones con video al hacer scroll
gsap.utils.toArray(".seccion-video__content").forEach(content => {
  const label = content.querySelector(".seccion-label");
  const titulo = content.querySelector("h2");
  const parrafo = content.querySelector("p");
  const boton = content.querySelector(".hero-btn");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: content,
      start: "top 75%",
    }
  });

  tl.from(label, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out"
  })
  .from(titulo, {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power3.out"
  }, "-=0.2")
  .from(parrafo, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3")
  .from(boton, {
    opacity: 0,
    y: 15,
    duration: 0.4,
    ease: "power2.out"
  }, "-=0.2");
});
