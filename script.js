window.addEventListener('load', () => {
    const intro = document.getElementById('intro-overlay');
    if (!intro) return;

    setTimeout(() => {
        intro.classList.add('hidden'); // aquí desaparece el título incial
    }, 1200); // 1200 ms = 1,2 segundos
});
// proyectos
const projects = [
    {
        id: 'fresh-squeeze',
        title: 'Fresh Squeeze',
        category: 'Diseño de Producto • Diseño Centrado en el Usuario',
        shortDesc: 'Botella de vidrio para Verallia Design Awards',
        description: 'Diseño de botella para la compañía Verallia, empresa especializada en envases de vidrio. Este proyecto sigue el concepto "Off Time" propuesto por la campaña "Verallia Design Awards" de 2023. La forma de la botella está inspirada en un análisis formal de diferentes frutas, mientras que la etiqueta sugiere visualmente el gesto cotidiano de pelar la fruta, reforzando el concepto de pausa y disfrute personal.',
        tools: 'Keyshot 360, Keyshot, Adobe Illustrator',
        year: '2023',
        signature: 'Verallia',
        images: [
            './imagenes/imagen1.jpg'
        ]
    },
    {
        id: 'vitabite',
        title: 'Vitabite',
        category: 'Diseño Centrado en el Usuario',
        shortDesc: 'Máquina expendedora de comida saludable',
        description: 'Ante la falta de cafetería en la universidad, se diseñó una máquina expendedora que ofrece ingredientes para crear tu propio bowl saludable. A través de una app vinculada, los usuarios pueden registrarse y obtener un plan nutricional personalizado. La experiencia se complementa con carteles informativos sobre recetas y consumo, inspirados en referentes icónicos del diseño gráfico.',
        tools: 'Figma, Adobe Illustrator, Photoshop Procreate',
        year: '2023',
        signature: 'UDIT, Universidad de Diseño, Innovación y Tecnología',
        images: [
            './imagenes/imagen2.jpg',
            './imagenes/imagen3.jpg'
        ]
    },
    {
        id: 'armlamps',
        title: 'Armlamps',
        category: 'Diseño de Producto • Diseño Mobiliario',
        shortDesc: 'Colección de lámparas biomiméticas',
        description: 'Colección de lámparas inspiradas en la estructura ósea de los animales, pensadas para adaptarse a distintos tipos de espacios. En el proceso de diseño se utilizó inteligencia artificial para optimizar la instalación de los cables y la distribución de la luz, realizando posteriormente ajustes y correcciones manuales en Procreate para perfeccionar la propuesta.',
        tools: 'Solid Edge, AutoCAD, Procreate, IA',
        year: '2023',
        images: [
            './imagenes/imagen4.jpg'
        ]
    },
    {
        id: 'uppa',
        title: 'Uppa',
        category: 'Diseño Industrial • Diseño Inclusivo',
        shortDesc: 'Silla de ruedas adaptada para subir escaleras',
        description: 'Silla de ruedas manual diseñada para facilitar la subida y bajada de escalones a través de un mecanismo de rampa y doble rueda. Su geometría angular y el sistema de palancas permiten al usuario interactuar de forma activa con el entorno, mejorando la movilidad en espacios urbanos y domésticos.',
        tools: 'Fusion 360, Photoshop, CNC, Corte láser',
        year: '2022',
        images: [
            './imagenes/imagen5.jpg'
        ]
    },
    {
        id: 'pawpal',
        title: 'PawPal',
        category: 'Diseño Industrial',
        shortDesc: 'Transportín adaptable para mascotas',
        description: 'Diseño de transportín expandible para mascotas, especialmente pensado para viajes de larga duración. Cumple con las normativas de transporte de las principales aerolíneas. Incorpora un sistema de ventilación optimizado que garantiza una adecuada circulación del aire. Integra una ventana de metacrilato para reducir el estrés del animal y mejorar su comodidad durante el trayecto.',
        tools: 'Rhinoceros, Keyshot, Procreate, Illustrator',
        year: '2025',
        images: [
            './imagenes/imagen8.jpg'
        ]
    },
    {
        id: 'footpointer',
        title: 'Footpointer',
        category: 'Diseño de Producto • Diseño Inclusivo',
        shortDesc: 'Ratón de ordenador operado con el pie',
        description: 'Ratón de ordenador operado con el dedo gordo del pie, diseñado para personas con movilidad reducida. Su forma ergonómica se adapta al arco del pie, mejorando la accesibilidad y el control. Este dispositivo permite a usuarios con discapacidades físicas interactuar con ordenadores de forma intuitiva y precisa.',
        tools: 'Rhinoceros, Keyshot, Procreate, Adobe Illustrator',
        year: '2023',
        images: [
            './imagenes/imagen6.jpg'
        ]
    },
    {
        id: 'accessgrip',
        title: 'AccessGrip',
        category: 'Diseño Industrial • Diseño Inclusivo',
        shortDesc: 'Sistema de agarre inteligente para usuarios con discapacidad',
        description: 'Diseño de un sistema de agarre para la Fundación ONCE, controlado por el robot Temi. Incorpora vibraciones en el mango para indicar giros, paradas y obstáculos, además de un sensor de presencia que detecta cuándo el usuario coge o suelta el agarre. El sistema se compone de una base que alberga el circuito, una tapa de protección y dos agarres con mango integrado.',
        tools: 'Rhinoceros, Keyshot, Procreate',
        year: '2025',
        signature: 'Fundación Once',
        images: [
            './imagenes/imagen7.jpg'
        ]
    }
];

// navegaciñon
const navLinks = document.querySelectorAll('.sidebar-nav-link');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section') + '-section';
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        link.classList.add('active');
        document.getElementById(sectionId).classList.add('active');

        if (link.getAttribute('data-section') === 'projects') {
            showProjectsIndex();
        }
        
        window.scrollTo(0, 0);
    });
});

// renders
function showProjectsIndex() {
    const indexContainer = document.getElementById('projects-index');
    const detailsContainer = document.getElementById('project-details');
    
    indexContainer.style.display = 'grid';
    detailsContainer.innerHTML = '';
    
    indexContainer.innerHTML = projects.map(project => `
        <a href="#" class="project-index-item" data-project="${project.id}">
            <div class="project-index-title">${project.title}</div>
            <div class="project-index-category">${project.category}</div>
        </a> 
    `).join('');

    // evento para nombrar los index de las listas
    document.querySelectorAll('.project-index-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = item.getAttribute('data-project');
            showProjectDetail(projectId);
        });
    });
}

// detalles de proyectos
function showProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const indexContainer = document.getElementById('projects-index');
    const detailsContainer = document.getElementById('project-details');
    
    indexContainer.style.display = 'none';
    
    detailsContainer.innerHTML = `
        <a href="#" class="back-button" id="back-to-index"> ← Volver a proyectos</a>
        <div class="project-header">
            <h2 class="project-title">${project.title}</h2>
        </div>
        <div class="project-info">
            <div class="project-info-item">
                <span class="project-info-label">Sector de diseño</span>
                <div class="project-info-value">${project.category}</div>
            </div>
            <div class="project-info-item">
                <span class="project-info-label">Herramientas utilizadas</span>
                <div class="project-info-value">${project.tools}</div>
            </div>
            <div class="project-info-item">
                <span class="project-info-label">Año</span>
                <div class="project-info-value">${project.year}</div>
            </div>
             <div class="project-info-item">
                <span class="project-info-label">Firma</span>
                <div class="project-info-value">${project.signature}</div>
    </div>
        </div>
        <p class="about-text">${project.description}</p>
        <div class="project-gallery">
            ${project.images.map(img => `<img src="${img}" alt="${project.title}" class="project-image">`).join('')}
        </div>
    `;

    // boton de "volver a proyectos"
    document.getElementById('back-to-index').addEventListener('click', (e) => {
        e.preventDefault();
        showProjectsIndex();
    });
    window.scrollTo(0, 0);
}
showProjectsIndex();
