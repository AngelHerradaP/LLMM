const BTN = document.querySelector(".botonBuscar");
let TABLA_EPISODIO = document.querySelector(".tablaEpisodios");
const NOMBRE = document.querySelector(".nombrePersonaje");
const ESPECIE = document.querySelector(".especie");
const GENERO = document.querySelector(".genero");
const IMAGEN = document.querySelector(".imagen");
const NUM_EPISODIOS = document.querySelector(".numeroEpisodios");
const CONTAINER = document.querySelector(".tablaPersonaje").classList;

let TABLA_EPISODIO_DEFAULT = TABLA_EPISODIO.innerHTML;
let color;
let nombreId = new Map();
let numeroPersonaje;

BTN.addEventListener("click", buscarEpisodio);

async function buscarEpisodio() {
    resetearHtml();
    TABLA_EPISODIO.innerHTML = TABLA_EPISODIO_DEFAULT;
    const EPISODIO = document.querySelector(".numeroEpisodio").value;
    TABLA_EPISODIO_DEFAULT = TABLA_EPISODIO.innerHTML;

    const url = `https://rickandmortyapi.com/api/episode/${EPISODIO}`;

    try {
        const responseEpisode = await fetch(url);
        const dataEpisode = await responseEpisode.json();
        for (let index = 0; index < dataEpisode.characters.length; index++) {
            const responseCharacter = await fetch(dataEpisode.characters[index]);
            const dataCharacter = await responseCharacter.json();
                TABLA_EPISODIO.innerHTML += 
                    `<tr>
                        <td>${dataCharacter.name}</td>
                        <td><img class="btnImagen" src="${dataCharacter.image}" width="100px" height="100px"></img></td>
                    </tr>`;
            nombreId.set(index, dataCharacter.id);
        }
        let BTN_IMAGEN = document.querySelectorAll(".btnImagen");
        BTN_IMAGEN.forEach((element, index) => {
            element.addEventListener("click", () => {relacionarImagenMapa(index)});

        });
    } catch (error) {
        TABLA_EPISODIO.style.color = "red";
        TABLA_EPISODIO.innerHTML += `<p>No se ha encontrado ese capitulo<p>`;
    }
}

async function buscarPersonaje() {

    console.log(numeroPersonaje);
    const url = `https://rickandmortyapi.com/api/character/${numeroPersonaje}`;

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
    } else if (data.gender == "Female") {
        color = "containerFemale";
        CONTAINER.add(color);
    }else {
        color = "containerUnknown";
        CONTAINER.add(color);
    }
}

function relacionarImagenMapa(index) {
    numeroPersonaje = nombreId.get(index);
    buscarPersonaje();
}

function resetearHtml() {
    TABLA_EPISODIO.style.color = "white";
    NOMBRE.innerHTML = "";
    ESPECIE.innerHTML = "";
    GENERO.innerHTML = "";
    IMAGEN.src = "";
    NUM_EPISODIOS.innerHTML = "";
    CONTAINER.remove(color);
}