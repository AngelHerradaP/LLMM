const btn = document.querySelector(".botonBuscar");
let color;
btn.addEventListener("click", buscarPersonaje);

async function buscarPersonaje() {
    
    const nombrePersonaje = document.querySelector("#personaje").value;
    
    const url = `https://rickandmortyapi.com/api/character/${nombrePersonaje}`;

    const NOMBRE = document.querySelector(".nombre");
    const ESPECIE = document.querySelector(".especie");
    const GENERO = document.querySelector(".genero");
    const IMAGEN = document.querySelector(".imagen");
    const NUM_EPISODIOS = document.querySelector(".numeroEpisodios");
    const CONTAINER = document.querySelector(".tabla").classList;

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