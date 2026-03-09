# 🎭 Universidad a Escena — Teatro Real de Madrid

Juego web interactivo desarrollado como parte del proyecto **Universidad a Escena** del **Teatro Real de Madrid**.
Creado por **Ahinoa, Shan y Mario**.

---

## 📖 Descripción

**Universidad a Escena** es un juego de adivinanza de personajes basado en la obra *El Sueño de una Noche de Verano* de William Shakespeare.

El jugador debe combinar correctamente la **cabeza**, el **traje**, el **audio** y el **nombre** de cada personaje para descubrir de quién se trata. Los elementos aparecen en orden aleatorio cada vez que se inicia el juego, lo que hace cada partida única y desafiante.

---

## 🎮 Personajes

| Índice | Personaje  |
|--------|------------|
| 0      | Titania    |
| 1      | Bottom     |
| 2      | Hermia     |
| 3      | Lysander   |

---

## 🗂️ Estructura del Proyecto


---

## 🕹️ ¿Cómo se juega?

1. Abre `index.html` en tu navegador para acceder a la pantalla de inicio.
2. Pulsa el botón **JUGAR** para comenzar.
3. En la pantalla del juego encontrarás cuatro selectores con flechas:
   - 🎵 **Audio** — Escucha el fragmento de voz del personaje.
   - 👤 **Nombre** — Selecciona el nombre del personaje.
   - 🧢 **Cabeza** — Elige la cabeza del personaje.
   - 👔 **Traje** — Elige el traje del personaje.
4. Usa las **flechas ◀ ▶** para cambiar cada elemento.
5. Cuando creas que has combinado correctamente los cuatro elementos, pulsa **ADIVINAR**.
   - ✔ Si todos los índices coinciden, ¡habrás acertado el personaje!
   - ✘ Si alguno no encaja, inténtalo de nuevo.

> ⚠️ **Atención:** Al entrar al juego, los cuatro elementos aparecen en posiciones **aleatorias e independientes**, lo que hace cada partida diferente.

---

## 🧠 Lógica del Juego

La mecánica de adivinanza se basa en que cada personaje tiene asignado un **índice numérico** que es el mismo para su cabeza, traje, audio y nombre:



El juego comprueba si `indiceCabeza === indiceTraje === indiceAudio === indiceNombre`.
Si los cuatro coinciden, muestra el mensaje de éxito con el nombre del personaje acertado.

---

## 🎨 Diseño

El diseño sigue la **identidad visual corporativa del Teatro Real de Madrid**:

| Elemento        | Valor                        |
|-----------------|------------------------------|
| Color principal | `rgb(200, 16, 46)` (rojo)    |
| Color secundario| `#000000` (negro)            |
| Color terciario | `#ffffff` (blanco)           |
| Tipografía      | `sans-serif`                 |
| Estilo          | Minimalista, bordes rectos   |

---

## 📱 Responsive

El proyecto está diseñado para visualizarse correctamente en cualquier dispositivo:

- 🖥️ **PC / escritorio**
- 📱 **Móvil**
- 📟 **Tablet**

Se utilizan **media queries** en el CSS para adaptar tamaños de fuente, imágenes y layouts a pantallas pequeñas (`max-width: 768px`).

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| `HTML5`    | Estructura de las pantallas |
| `CSS3`     | Estilos, animaciones y responsive |
| `JavaScript (Vanilla)` | Lógica del juego, aleatoriedad y comprobación |

> No se utilizan librerías externas ni frameworks. El proyecto funciona directamente en cualquier navegador moderno sin necesidad de instalación.
