const boton1 = document.getElementById("btnRedondo1")
const boton2 = document.getElementById("btnRedondo2")
const boton3 = document.getElementById("btnRedondo3")

boton1.addEventListener('click', function() {
    textoDinamico.innerHTML = "<p>¡Hola! Mi nombre es Ana, soy una profesional de marketing digital apasionada por el mundo de la tecnología y la innovación. Con más de cinco años de experiencia en el campo del marketing digital, he trabajado con una variedad de clientes y empresas en proyectos de alcance global.</p><p>Mi formación académica incluye una licenciatura en Comunicación Social y una maestría en Marketing Digital. Además, he tomado cursos especializados en SEO, SEM, marketing de contenidos y análisis de datos para complementar mi formación.</p>"
})

boton2.addEventListener('click', function() {
    textoDinamico.innerHTML = "<p>A lo largo de mi carrera como profesional del marketing digital, he tenido la oportunidad de trabajar en diferentes proyectos y áreas del campo. A continuación, te presento algunos de los trabajos más destacados que he realizado:</p><p>Planificación y ejecución de campañas publicitarias en línea para una compañía de seguros. Desarrollé una estrategia de marketing para la empresa y ejecuté campañas publicitarias en línea en diferentes plataformas, incluyendo Google Ads y Facebook Ads, que generaron un aumento en las conversiones y ventas.</p><p>Gestión de redes sociales para una marca de productos de belleza. Desarrollé y ejecuté una estrategia de redes sociales que aumentó significativamente el número de seguidores y compromiso en las plataformas de la marca, y generó un aumento en el tráfico a la página web y las ventas.</p>"
})

boton3.addEventListener('click', function() {
    textoDinamico.innerHTML = "<p>Como profesional del marketing digital, cuento con una amplia gama de habilidades que me permiten abordar proyectos de manera efectiva y obtener los mejores resultados para mis clientes. Algunas de mis habilidades más destacadas incluyen:</p><p>Estrategia de marketing: Tengo una sólida formación en planificación estratégica y puedo desarrollar planes de marketing efectivos para diferentes tipos de proyectos y objetivos comerciales.</p><p>Gestión de proyectos: Poseo habilidades para la gestión de proyectos, lo que me permite liderar equipos multidisciplinarios y coordinar diferentes tareas y actividades para cumplir con los plazos y objetivos establecidos.</p>"
})

const el = document.getElementById("poster")
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20

    const xRotation = (
        (layerY - width / 2) / height
    ) * 20

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
    `
    el.style.transform = string
})

el.addEventListener('mouseout', () => {
    el.style.transform = `
        perspective(500px)
        scale(1.0)
        rotateX(0)
        rotateY(0)
    `
})