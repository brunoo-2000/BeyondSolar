//------------------------GSAP-------------------------------
gsap.registerPlugin(ScrollTrigger, SplitText);

// Títulos aparecen al hacer scroll
document.querySelectorAll('section h2').forEach(titulo => {
    const split = new SplitText(titulo, { type: 'chars' });
    gsap.from(split.chars, {
        scrollTrigger: {
            trigger: titulo,
            start: 'top 85%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.04,
        duration: 0.2,
        ease: 'power3.out'
    });
});

// Párrafos aparecen suavemente
document.querySelectorAll('section p').forEach(p => {
    gsap.from(p, {
        scrollTrigger: {
            trigger: p,
            start: 'top 90%'
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power1.out'
    });
});
//------------------------GSAP-------------------------------



const chartMetodos = echarts.init(document.getElementById('grafico-metodos'),);
const chartAnios = echarts.init(document.getElementById('grafico-anios'),);
const chartMasa = echarts.init(document.getElementById('grafico-masa'),);
const estado = {
    metodos: [],
    anios: [],
    masa: []
}

async function obtenerAnios(){
    try{
        const descAnios = await fetch('https://corsproxy.io/https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+disc_year+from+pscomppars+order+by+disc_year+asc&format=json');
        const datos = await descAnios.json();
        return datos;
    }catch(error){
        console.error('ERROR!:', error);
    }
}

async function obtenerMetodos() {
    try{
        const metodos = await fetch ('https://corsproxy.io/https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+discoverymethod+from+pscomppars&format=json');
        const datos = await metodos.json();
        return datos;
    }
    catch(error){
        console.error('ERROR!:', error);
    }
}

async function obtenerMasa(){
    try{
        const masa = await fetch('https://corsproxy.io/https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_bmasse,pl_eqt+from+pscomppars+where+pl_bmasse+is+not+null+and+pl_eqt+is+not+null&format=json');
        const datos = await masa.json();
        return datos;
    }catch(error){
        console.error('ERROR:', error);
    }
}

function renderizarMetodos(){
    const conteo = {};
    estado.metodos.forEach(p =>{
        conteo[p.discoverymethod] = (conteo[p.discoverymethod] || 0) + 1;
    })

    const datos = Object.keys(conteo).map(metodo => ({
        name: metodo,
        value: conteo[metodo]
    }))

    chartMetodos.setOption({
        title: { text: 'Metodos de descubrimiento', left: 'center'},
        tooltip: { trigger: 'item'},
        series: [{ type: 'pie', data: datos}]
    });
}

function renderizarAnios() {
    const conteo = {};
    estado.anios.forEach(p => {
        conteo[p.disc_year] = (conteo[p.disc_year] || 0) + 1;
    });

    chartAnios.setOption({
        xAxis: { data: Object.keys(conteo) },
        yAxis: {},
        series: [{ type: 'bar', data: Object.values(conteo) }]
    });
}

function renderizarMasa() {
    const datos = estado.masa.map(p => [p.pl_bmasse, p.pl_eqt, p.pl_name]);

    chartMasa.setOption({
        xAxis: { name: 'Masa (M⊕)' },
        yAxis: { name: 'Temperatura (K)' },
        series: [{ type: 'scatter', data: datos }]
    });
}

async function inicializarDashboard(){
    try{
        const[jsonMetodos, jsonAnios, jsonMasa] = await Promise.all([
            obtenerMetodos(),
            obtenerAnios(),
            obtenerMasa()
        ]);

        estado.metodos = jsonMetodos;
        estado.anios = jsonAnios;
        estado.masa = jsonMasa;

        renderizarAnios();
        renderizarMasa();
        renderizarMetodos();
        
    }catch(error){
        console.error('Error al cargar datos:', error);
    }
}

inicializarDashboard();
window.addEventListener('resize', () => {
    chartMetodos.resize();
    chartAnios.resize();
    chartMasa.resize();
})