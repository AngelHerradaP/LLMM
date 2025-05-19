const BUSCADOR_PALABRA = document.querySelector(".buscadorPalabra");
const BTN_BUSCAR = document.querySelector(".botonBuscar");
const PALABRA = document.querySelector(".palabra");
const DEFINCION = document.querySelector(".definicion");
const DESPLEGABLE = document.querySelector(".desplegableDefinicion");
const DESPLEGABLE_DEFINICION = new Map();

BTN_BUSCAR.addEventListener("click", buscarPalabra);
DESPLEGABLE.addEventListener("click", actualizarDesplegable);

async function buscarPalabra() {
    
    try {
        PALABRA.innerHTML = "";
        DEFINCION.innerHTML = "";
        DESPLEGABLE.innerHTML = "";
        PALABRA.style.color = "green";
        const url = `https://rae-api.com/api/words/${BUSCADOR_PALABRA.value}`

        const response = await fetch(url);
        const data = await response.json();

        PALABRA.innerHTML = data.data.word + ` (${data.data.meanings[0].origin.raw})`;
        for (let index = 1; index < data.data.meanings[0].senses.length + 1; index++) {
            const element = data.data.meanings[0].senses[index - 1];
            DESPLEGABLE_DEFINICION.set(`Definición ${index}`, element.raw);
            DESPLEGABLE.innerHTML = DESPLEGABLE.innerHTML + `<option>Definición ${index}</option>`
        }
        actualizarDesplegable();
    } catch (error) {
        DEFINCION.innerHTML = "";
        DESPLEGABLE.innerHTML = "";
        PALABRA.style.color = "red";
        PALABRA.innerHTML = "Palabra no encontrada";
    }
}

function actualizarDesplegable() {

    DEFINCION.innerHTML = DESPLEGABLE_DEFINICION.get(DESPLEGABLE.value);
}