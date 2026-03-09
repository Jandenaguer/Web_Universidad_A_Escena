// Arrays con las rutas de las imágenes
// Índice 0: Titania | Índice 1: Bottom | Índice 2: Hermia | Índice 3: Lysander
const cabezas = [
    "img/cabeza1.png",   // Titania
    "img/cabeza2.png",   // Bottom
    "img/cabeza3.png",   // Hermia
    "img/cabeza4.png",   // Lysander
    "img/cabeza5.png"    // Oberon
];

const trajes = [
    "img/traje1.png",    // Titania
    "img/traje2.png",    // Bottom
    "img/traje3.png",    // Hermia
    "img/traje4.png",
    "img/traje5.png"     // Lysander
];

const audios = [
    "audios/audio1.mp3", // Titania
    "audios/audio2.mp3", // Bottom
    "audios/audio3.mp3", // Hermia
    "audios/audio4.mp3",
    "audios/audio5.mp3"  // Lysander
];

const nombres = [
    "Titania",           // Índice 0
    "Bottom",            // Índice 1
    "Hermia",            // Índice 2
    "Lysander",
    "Oberon"           // Índice 3
];

// Variables de índice
let indiceCabeza = 0;
let indiceTraje  = 0;
let indiceAudio  = 0;
let indiceNombre = 0;

// Elementos del HTML
const imgCabeza        = document.getElementById("cabeza-img");
const imgTraje         = document.getElementById("traje-img");
const reproductorAudio = document.getElementById("reproductor-audio"); // ← Directo al <audio>
const textoNombre      = document.getElementById("nombre-personaje");
const mensajeResultado = document.getElementById("mensaje-resultado");

// --- Función para aplicar la clase CSS de posición a la cabeza ---
function aplicarClaseCabeza(indice) {
    imgCabeza.classList.remove("cabeza-0", "cabeza-1", "cabeza-2", "cabeza-3", "cabeza-4");
    imgCabeza.classList.add("cabeza-" + indice);
}

// --- Función para cambiar el audio (compatible con Safari iOS) ---
function actualizarAudio(indice) {
    // En Safari iOS, lo más fiable es asignar src directamente al elemento <audio>
    reproductorAudio.src = audios[indice];
    reproductorAudio.load();
}

// --- Función de inicialización ---
function inicializar() {
    // Generamos índices aleatorios
    indiceCabeza = indiceAleatorio(cabezas.length);
    indiceTraje  = indiceAleatorio(trajes.length);
    indiceAudio  = indiceAleatorio(audios.length);
    indiceNombre = indiceAleatorio(nombres.length);

    // Aplicamos los valores a la pantalla
    imgCabeza.src           = cabezas[indiceCabeza];
    imgTraje.src            = trajes[indiceTraje];
    textoNombre.textContent = nombres[indiceNombre];

    // Aplicamos clase CSS de posición de cabeza
    aplicarClaseCabeza(indiceCabeza);

    // Cargamos el audio directamente en el elemento <audio>
    actualizarAudio(indiceAudio);
}

// Función para generar un índice aleatorio
function indiceAleatorio(max) {
    return Math.floor(Math.random() * max);
}

// Llamamos a inicializar al cargar la página
inicializar();

// --- Funciones de cambio ---

function cambiarCabeza(direccion) {
    indiceCabeza += direccion;
    if (indiceCabeza < 0) indiceCabeza = cabezas.length - 1;
    else if (indiceCabeza >= cabezas.length) indiceCabeza = 0;
    imgCabeza.src = cabezas[indiceCabeza];
    aplicarClaseCabeza(indiceCabeza);
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

    // Usamos la función centralizada para mayor compatibilidad con Safari
    actualizarAudio(indiceAudio);
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