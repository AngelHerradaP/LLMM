const BUSCADOR_PALABRA = document.querySelector(".buscadorPalabra");
const BTN_BUSCAR = document.querySelector(".botonBuscar");
const PALABRA = document.querySelector(".palabra");
const DEFINCION = document.querySelector(".definicion");

BTN_BUSCAR.addEventListener("click",buscarPalabra);

async function buscarPalabra() {
    
    try {
        PALABRA.innerHTML = "";
        DEFINCION.innerHTML = "";
        PALABRA.style.color = "green";
        const url = `https://rae-api.com/api/words/${BUSCADOR_PALABRA.value}`

        const response = await fetch(url);
        const data = await response.json();

        PALABRA.innerHTML = data.data.word + ` (${data.data.meanings[0].origin.raw})`;
        data.data.meanings[0].senses.forEach(element => {
            DEFINCION.innerHTML = DEFINCION.innerHTML + `<li>${element.raw}</li>`;
        });

    } catch (error) {
        PALABRA.style.color = "red";
        PALABRA.innerHTML = "Palabra no encontrada";
    }
}