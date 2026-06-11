# Beyond Solar

**Autor:** Bruno Piri (brunoo-2000)  
**Carrera:** Tecnicatura Universitaria en Programación — UTN Rafaela  
**Materia:** Programación 3 — Frontend  
**Año:** 2026

---

## Descripción

Beyond Solar es un sitio web sobre exoplanetas: planetas que orbitan estrellas fuera de nuestro sistema solar. El sitio permite explorar exoplanetas destacados, ver estadísticas de descubrimientos y conocer los métodos que usan los astrónomos para detectarlos.

---

## Páginas

| Página | Descripción |
|---|---|
| `index.html` | Inicio con hero animado y secciones de presentación |
| `exoplanets.html` | Listado de exoplanetas consumido desde la NASA Exoplanet Archive |
| `estadisticas.html` | Gráficos interactivos con ECharts sobre descubrimientos |
| `metodos.html` | Métodos de descubrimiento con animaciones canvas |
| `contacto.html` | Formulario de contacto con validación en JavaScript |

---

## Tecnologías utilizadas

- HTML5, CSS3, JavaScript ES6+
- Bootstrap 5.3
- GSAP 3 (ScrollTrigger, SplitText)
- Apache ECharts 5.5
- NASA Exoplanet Archive (API pública)
- Google Fonts: Space Grotesk, Finlandica Headline

---

## Estructura del proyecto
beyond-solar/
├── index.html
├── exoplanets.html
├── estadisticas.html
├── metodos.html
├── contacto.html
├── styles.css
├── js/
│   ├── index.js
│   ├── nav.js
│   ├── exoplanets.js
│   ├── estadisticas.js
│   ├── metodos.js
│   ├── contacto.js
│   └── fondo.js
└── assets/
├── images/
└── videos/

## Cómo ejecutarlo localmente

1. Clonar o descomprimir el proyecto
2. Abrir la carpeta en Visual Studio Code
3. Instalar la extensión **Live Server**
4. Click derecho sobre `index.html` → **Open with Live Server**

> No requiere instalación de dependencias. Todas las librerías se cargan desde CDN.