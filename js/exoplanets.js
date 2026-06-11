

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const container = document.getElementById("planets-container");
  const busqueda = document.getElementById("buscador");

  // ── Datos locales ────────────────────────────────────────────────────────────

  const imagenes = {
    "Kepler-1988 b": "assets/images/1.png",
    "WASP-8 b": "assets/images/2.png",
    "K2-138 g": "assets/images/3.png",
    "TOI-674 b": "assets/images/4.png",
    "EPIC 212297394 c": "assets/images/5.png",
    "WASP-133 b": "assets/images/6.png",
    "Kepler-2001 c": "assets/images/7.png",
    "TOI-4010 b": "assets/images/8.png",
    "Kepler-314 c": "assets/images/9.png",
    "Kepler-93 b": "assets/images/10.png",
    "nu Oph b": "assets/images/11.png",
    "Kepler-103 b": "assets/images/12.png",
    "WASP-61 b": "assets/images/13.png",
    "TOI-2384 b": "assets/images/14.png",
    "K2-321 b": "assets/images/15.png",
    "HAT-P-28 b": "assets/images/16.png",
    "TOI-2876 b": "assets/images/17.png",
    "TOI-7510 d": "assets/images/18.png",
    "Kepler-1997 b": "assets/images/19.png",
    "TOI-2427 b": "assets/images/20.png",
  };

  const descripciones = {
    "Kepler-1988 b":
      "Kepler-1988 b es un exoplaneta de tipo super-Tierra que orbita alrededor de una estrella de tipo F. Su masa es de 2,96 veces la de la Tierra, tarda 11,5 días en completar una órbita alrededor de su estrella y se encuentra a 0,1038 UA de distancia de ella. Su descubrimiento se anunció en 2023.",
    "WASP-8 b":
      "WASP-8 b es un exoplaneta gigante gaseoso que orbita alrededor de una estrella de tipo G. Su masa es de 2,54 veces la de Júpiter, tarda 8,2 días en completar una órbita alrededor de su estrella y se encuentra a 0,0801 UA de ella. Su descubrimiento se anunció en 2010.",
    "K2-138 g":
      "K2-138 g is a Neptune-like exoplanet that orbits a G-type star. Its mass is 4.32 Earths, it takes 42 days to complete one orbit of its star, and is 0.23109 AU from its star. Its discovery was announced in 2021.",
    "TOI-674 b":
      "TOI-674 b es un exoplaneta similar a Neptuno que orbita alrededor de una estrella de tipo M. Su masa es de 23,6 veces la de la Tierra, tarda 2 días en completar una órbita alrededor de su estrella y se encuentra a 0,025 UA de ella. Su descubrimiento se anunció en 2021.",
    "EPIC 212297394 c":
      "EPIC 212297394 c es un exoplaneta similar a Neptuno que orbita alrededor de una estrella de tipo K. Su masa es de 5,77 veces la de la Tierra y tarda 5,2 días en completar una órbita alrededor de su estrella. Su descubrimiento se anunció en 2016.",
    "WASP-133 b":
      "WASP-133 b es un exoplaneta del tipo Júpiter caliente descubierto en 2016 por el proyecto WASP-South. Se caracteriza por ser un gigante gaseoso extremadamente cercano a su estrella anfitriona, completando una órbita en apenas 2.2 días",
    "Kepler-2001 c":
      "Kepler-2001 c es un exoplaneta de tipo super-Tierra que orbita alrededor de una estrella de tipo K. Su masa es de 3,97 veces la de la Tierra, tarda 14,1 días en completar una órbita alrededor de su estrella y se encuentra a 0,1084 UA de distancia de ella. Su descubrimiento se anunció en 2023.",
    "TOI-4010 b":
      "TOI-4010 b es un exoplaneta similar a Neptuno que orbita alrededor de una estrella de tipo K. Su masa es de 11 veces la de la Tierra, tarda 1,3 días en completar una órbita alrededor de su estrella y se encuentra a 0,0229 UA de ella. Su descubrimiento se anunció en 2023",
    "Kepler-314 c":
      "Kepler-314 c es un exoplaneta similar a Neptuno que orbita alrededor de una estrella de tipo G. Su masa es de 8,75 veces la de la Tierra, tarda 6 días en completar una órbita alrededor de su estrella y se encuentra a 0,064 UA de ella. Su descubrimiento se anunció en 2014.",
    "Kepler-93 b":
      "Kepler-93 b es un exoplaneta de tipo super-Tierra que orbita alrededor de una estrella de tipo G. Su masa es de 4,66 veces la de la Tierra, tarda 4,7 días en completar una órbita alrededor de su estrella y se encuentra a 0,05343 UA de distancia de ella. Su descubrimiento se anunció en 2014.",
    "nu Oph b":
      "Nu Ophiuchi b (también conocida como HD 163917 b) es un exoplaneta gigante gaseoso o enana marrón que orbita la estrella gigante Nu Ophiuchi, ubicada a aproximadamente 150 años luz de la Tierra.",
    "Kepler-103 b":
      "Kepler-103 b es un exoplaneta de tipo minineptuno descubierto en 2014 que orbita la estrella Kepler-103, ubicada a más de 1.300 años luz de la Tierra. Tiene un radio de casi 3,5 veces el de la Tierra y completa una órbita extremadamente rápida de solo 16 días.",
    "WASP-61 b":
      "WASP-61 b es un exoplaneta gigante gaseoso tipo Júpiter caliente, descubierto en 2012 mediante el método de tránsito. Orbita su estrella anfitriona (WASP-61) a una distancia muy corta y completa una vuelta cada 3,9 días terrestres.",
    "TOI-2384 b":
      "TOI-2384 b es un exoplaneta gigante gaseoso que orbita alrededor de una estrella de tipo K. Su masa es de 1,966 veces la de Júpiter, tarda 2,1 días en completar una órbita alrededor de su estrella y se encuentra a 0,02793 UA de ella. Su descubrimiento se anunció en 2024.",
    "K2-321 b":
      "K2-321 b es un exoplaneta del tipo supertierra que orbita una estrella enana roja (tipo M) situada a unos 254 años luz de la Tierra. Descubierto en 2020 mediante el método de tránsito, tiene una órbita extremadamente estrecha que completa en apenas 2,3 días terrestres.",
    "HAT-P-28 b":
      "HAT-P-28 b es un exoplaneta gigante gaseoso que orbita alrededor de una estrella de tipo G. Su masa es de 0,626 veces la de Júpiter, tarda 3,3 días en completar una órbita alrededor de su estrella y se encuentra a 0,0434 UA de distancia de ella. Su descubrimiento se anunció en 2011.",
    "TOI-2876 b":
      "TOI-2876 b es un exoplaneta gigante gaseoso que orbita alrededor de una estrella de tipo K. Su masa es de 0,17 veces la de Júpiter, tarda 6,3 días en completar una órbita alrededor de su estrella y se encuentra a 0,0654 UA de ella. Su descubrimiento se anunció en 2025.",
    "TOI-7510 d":
      "TOI-7510 d es un exoplaneta gigante gaseoso que orbita alrededor de una estrella de tipo G. Su masa es de 0,597 veces la de Júpiter, tarda 48,9 días en completar una órbita alrededor de su estrella y se encuentra a 0,2672 UA de distancia de ella. Su descubrimiento se anunció en 2025.",
    "Kepler-1997 b":
      "Kepler-1997 b es un exoplaneta similar a Neptuno que orbita alrededor de una estrella de tipo F. Su masa es de 5,82 veces la de la Tierra, tarda 26,8 días en completar una órbita alrededor de su estrella y se encuentra a 0,1815 UA de ella. Su descubrimiento se anunció en 2023.",
    "TOI-2427 b":
      "TOI-2427 b es un exoplaneta de tipo super-Tierra que orbita alrededor de una estrella de tipo K. Su masa es de 3,89 veces la de la Tierra, tarda 1,3 días en completar una órbita alrededor de su estrella y se encuentra a 0,0202 UA de ella. Su descubrimiento se anunció en 2022.",
  };

  

  document.fonts.ready.then(() => {
    gsap.set(".split", { opacity: 1 });
  });

  SplitText.create(".split", {
    type: "words, lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit(self) {
      return gsap.from(self.lines, {
        duration: 2,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
      });
    },
  });

  

  busqueda.addEventListener("input", () => {
    const textoBusqueda = busqueda.value.toLowerCase();
    document.querySelectorAll(".planet-card").forEach((card) => {
      const coincide = card.textContent.toLowerCase().includes(textoBusqueda);
      card.style.display = coincide ? "block" : "none";
    });
  });

  

  async function obtenerPlanetas() {
    const url = "https://corsproxy.io/https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,hostname,disc_year+from+pscomppars+where+pl_name+in+('Kepler-1988+b','WASP-8+b','K2-138+g','TOI-674+b','EPIC+212297394+c','WASP-133+b','Kepler-2001+c','TOI-4010+b','Kepler-314+c','Kepler-93+b','nu+Oph+b','Kepler-103+b','WASP-61+b','TOI-2384+b','K2-321+b','HAT-P-28+b','TOI-2876+b','TOI-7510+d','Kepler-1997+b','TOI-2427+b')&format=json";
    const respuesta = await fetch(url);
    const planetas = await respuesta.json();
    mostrarPlanetas(planetas);
  }

  function mostrarPlanetas(planetas) {
    planetas.forEach((planeta) => {
      const card = document.createElement("div");
      card.classList.add("planet-card");

      const imgUrl = imagenes[planeta.pl_name] || "img/default.jpg";
      const desc = descripciones[planeta.pl_name] || "No se encontró ninguna descripción.";

      card.innerHTML = `
        <div class="card-img-container">
          <img src="${imgUrl}" class="card-img-top" alt="imagen planeta">
          <h2>${planeta.pl_name}</h2>
        </div>
        <div class="card-body">
          <p>Estrella: ${planeta.hostname}</p>
          <p>Descubrimiento: ${planeta.disc_year}</p>
          <p id="desc">Descripción: ${desc}</p>
        </div>
      `;

      container.appendChild(card);
    });

    iniciarScrollEffect();
  }

 

  function iniciarScrollEffect() {
    document.querySelectorAll(".planet-card").forEach((card) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -20,
        ease: "none",
      });
    });
  }

  obtenerPlanetas();
});
