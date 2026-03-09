// Arrays con las rutas de las imágenes
// Índice 0: Titania | Índice 1: Bottom | Índice 2: Hermia | Índice 3: Lysander
const cabezas = [
    "img/cabeza1.png",   // Titania
    "img/cabeza2.png",   // Oberon
    "img/cabeza3.png",   // Hermia
    "img/cabeza4.png"    // Lysander
];

const trajes = [
    "img/traje1.png",    // Titania
    "img/traje2.png",    // Oberon
    "img/traje3.png",    // Hermia
    "img/traje4.png"     // Lysander
];

const audios = [
    "audios/audio1.mp3", // Titania
    "audios/audio2.mp3", // Oberon
    "audios/audio3.mp3", // Hermia
    "audios/audio4.mp3"  // Lysander
];

const nombres = [
    "Titania",           // Índice 0
    "Oberon",            // Índice 1
    "Hermia",            // Índice 2
    "Lysander"           // Índice 3
];

// --- Función para generar un índice aleatorio ---
// Devuelve un número entero entre 0 y (max - 1)
function indiceAleatorio(max) {
    return Math.floor(Math.random() * max);
}

// Variables de índice: cada una empieza en un valor aleatorio e independiente
let indiceCabeza = indiceAleatorio(cabezas.length);
let indiceTraje  = indiceAleatorio(trajes.length);
let indiceAudio  = indiceAleatorio(audios.length);
let indiceNombre = indiceAleatorio(nombres.length);

// Elementos del HTML
const imgCabeza        = document.getElementById("cabeza-img");
const imgTraje         = document.getElementById("traje-img");
const fuenteAudio      = document.getElementById("fuente-audio");
const reproductorAudio = document.getElementById("reproductor-audio");
const textoNombre      = document.getElementById("nombre-personaje");
const mensajeResultado = document.getElementById("mensaje-resultado");

// --- Función de inicialización ---
// Aplica los índices aleatorios a la pantalla nada más cargar el juego
function inicializar() {
    imgCabeza.src              = cabezas[indiceCabeza];
    imgTraje.src               = trajes[indiceTraje];
    fuenteAudio.src            = audios[indiceAudio];
    reproductorAudio.load();
    textoNombre.textContent    = nombres[indiceNombre];
}

// Llamamos a inicializar en cuanto carga la página
inicializar();

// --- Funciones de cambio ---

function cambiarCabeza(direccion) {
    indiceCabeza += direccion;
    if (indiceCabeza < 0) indiceCabeza = cabezas.length - 1;
    else if (indiceCabeza >= cabezas.length) indiceCabeza = 0;
    imgCabeza.src = cabezas[indiceCabeza];
    limpiarMensaje();
}

function cambiarTraje(direccion) {
    indiceTraje += direccion;
    if (indiceTraje < 0) indiceTraje = trajes.length - 1;
    else if (indiceTraje >= trajes.length) indiceTraje = 0;
    imgTraje.src = trajes[indiceTraje];
    limpiarMensaje();
}

function cambiarAudio(direccion) {
    indiceAudio += direccion;
    if (indiceAudio < 0) indiceAudio = audios.length - 1;
    else if (indiceAudio >= audios.length) indiceAudio = 0;
    fuenteAudio.src = audios[indiceAudio];
    reproductorAudio.load();
    limpiarMensaje();
}

function cambiarNombre(direccion) {
    indiceNombre += direccion;
    if (indiceNombre < 0) indiceNombre = nombres.length - 1;
    else if (indiceNombre >= nombres.length) indiceNombre = 0;
    textoNombre.textContent = nombres[indiceNombre];
    limpiarMensaje();
}

// --- Función principal del juego ---
function adivinar() {
    if (
        indiceCabeza === indiceNombre &&
        indiceTraje  === indiceNombre &&
        indiceAudio  === indiceNombre
    ) {
        const nombreAcertado = nombres[indiceNombre];
        mostrarMensaje(
            `✔ ¡Correcto! ¡Has acertado a ${nombreAcertado}!`,
            "correcto"
        );
    } else {
        mostrarMensaje(
            "✘ ¡Casi! Alguna pieza no encaja. ¡Inténtalo de nuevo!",
            "incorrecto"
        );
    }
}

// --- Funciones auxiliares de mensaje ---
function mostrarMensaje(texto, tipo) {
    mensajeResultado.textContent = texto;
    mensajeResultado.className = "mensaje-resultado " + tipo;
}

function limpiarMensaje() {
    mensajeResultado.textContent = "";
    mensajeResultado.className = "mensaje-resultado";
}