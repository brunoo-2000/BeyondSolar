const canvas = document.getElementById('fondo-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
};



window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const espaciado = 60;
    const influencia = 80;
    const fuerza = 15;

    for (let x = 0; x < canvas.width; x += espaciado) {
        for (let y = 0; y < canvas.height; y += espaciado) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const distancia = Math.sqrt(dx * dx + dy * dy);

            let px = x;
            let py = y;

            if (distancia < influencia) {
                const angulo = Math.atan2(dy, dx);
                const empuje = (influencia - distancia) / influencia * fuerza;
                px -= Math.cos(angulo) * empuje;
                py -= Math.sin(angulo) * empuje;
            }

            ctx.beginPath();
            ctx.arc(px, py, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.fill();
        }
    }

    requestAnimationFrame(dibujar);
}

dibujar(); // ← esta línea es clave