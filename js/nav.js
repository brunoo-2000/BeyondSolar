
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const miOffCanvas = document.getElementById("offcanvasNavbar");
  const links = document.querySelectorAll(".animar-link");
  const nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  // Ocultar/mostrar navbar al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      nav.classList.add("hidden");
    } else {
      nav.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;
  });

  // Animación de links al abrir el offcanvas
  miOffCanvas.addEventListener("show.bs.offcanvas", () => {
    gsap.from(".animar-link", {
      x: -50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
    });
  });

  // Hover en links del offcanvas
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { y: -2, duration: 0.2, ease: "power2.out" });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { y: 0, duration: 0.2, ease: "power2.out" });
    });
  });
});
