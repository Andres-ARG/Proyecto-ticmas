const btnBotonRedondo = document.getElementsByClassName("btnBotonRedondo").onclick = cambiarContenidoSobreMi;
const textoDinamico = document.getElementsByClassName("textoDinamico"); 


function cambiarContenidoSobreMi() {
    console.log('clg')
    document.getElementById("textoDinamico").innerHTML = "Soy un profesional con amplia experiencia en el campo de la contabilidad y las finanzas. He trabajado en empresas de diferentes sectores, lo que me ha permitido adquirir un conocimiento profundo de los procesos contables y financieros que son esenciales para el buen funcionamiento de cualquier organización. Soy un apasionado de mi trabajo, siempre buscando nuevas formas de mejorar los procesos y aumentar la eficiencia de la empresa."
}

function cambiarContenidoSobreTrabajo() {
    document.getElementById("textoDinamico").innerHTML = "<h1>Hola</h1>"
}