const DESPLEGABLE_PERSONAJE = document.querySelector("#personaje");
const BTN = document.querySelector(".botonBuscar");
const TABLA_EPISODIO = document.querySelector(".tablaEpisodios");
let TABLA_EPISODIO_DEFAULT = TABLA_EPISODIO.innerHTML;
let BTN_IMAGEN = document.querySelectorAll(".btnImagen");
let color;
let nombreId = new Map();
let numeroPersonaje;

BTN.addEventListener("click", buscarEpisodio);
DESPLEGABLE_PERSONAJE.addEventListener("change", buscarPersonaje);

async function buscarEpisodio() {

    TABLA_EPISODIO.innerHTML = TABLA_EPISODIO_DEFAULT;
    const EPISODIO = document.querySelector(".numeroEpisodio").value;
    TABLA_EPISODIO_DEFAULT = TABLA_EPISODIO.innerHTML;

    const url = `https://rickandmortyapi.com/api/episode/${EPISODIO}`;

    const responseEpisode = await fetch(url);
    const dataEpisode = await responseEpisode.json();

    try {
        for (let index = 0; index < dataEpisode.characters.length; index++) {
            const responseCharacter = await fetch(dataEpisode.characters[index]);
            const dataCharacter = await responseCharacter.json();
            TABLA_EPISODIO.innerHTML = TABLA_EPISODIO.innerHTML + 
            `<tr>
                <td>${dataCharacter.name}</td>
                <td><img class="btnImagen" src="${dataCharacter.image}" width="100px" height="100px"></img></td>
            </tr>`;
            DESPLEGABLE_PERSONAJE.innerHTML = DESPLEGABLE_PERSONAJE.innerHTML + 
            `<option value="${dataCharacter.id}"> 
                ${dataCharacter.name}
            </option>`;
            nombreId.set(index, dataCharacter.id);
        }
        let BTN_IMAGEN = document.querySelectorAll(".btnImagen");
        BTN_IMAGEN.forEach((element, index) => {
            element.addEventListener("click", relacionarImagenMapa(index));
            element.addEventListener("click", console.log(element[index]));
            element.addEventListener("click", buscarPersonaje);
        });
    } catch (error) {
        alert(error)
    }
}

async function buscarPersonaje() {

    console.log(numeroPersonaje);
    const url = `https://rickandmortyapi.com/api/character/${numeroPersonaje}`;

    const NOMBRE = document.querySelector(".nombrePersonaje");
    const ESPECIE = document.querySelector(".especie");
    const GENERO = document.querySelector(".genero");
    const IMAGEN = document.querySelector(".imagen");
    const NUM_EPISODIOS = document.querySelector(".numeroEpisodios");
    const CONTAINER = document.querySelector(".tablaPersonaje").classList;

    const response = await fetch(url);
    const data = await response.json();

    CONTAINER.remove(color);

    NOMBRE.innerHTML = `<h3>${data.name}</h3>`;
    ESPECIE.innerHTML = `<h3>${data.species}</h3>`;
    GENERO.innerHTML = `<h3>${data.gender}</h3>`;
    IMAGEN.src = `${data.image}`;
    NUM_EPISODIOS.innerHTML = `<h3>${data.episode.length}</h3>`;

    if (data.gender == "Male") {
        color = "containerMale";
        CONTAINER.add(color);
    } else {
        color = "containerFemale";
        CONTAINER.add(color);
    }
}

function relacionarImagenMapa(index) {
    numeroPersonaje = nombreId.get(index);
}