const btn = document.querySelector(".botonBuscar");
btn.addEventListener("click", buscarPokemon);

async function buscarPokemon() {
    
    const nombrePokemon = document.querySelector(".pokemon").value;
    
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    const nombre = document.querySelector(".nombre");
    const imagen = document.querySelector(".imagen");
    const altura = document.querySelector(".altura");
    const tipo = document.querySelector(".tipos");
    // Reseteo la lista para que no se sumen los tipos.
    tipo.innerHTML = ``;

    try {
        
        const response = await fetch(url);
        const data = await response.json();

        nombre.innerHTML = `<h3>${data.name}</h3>`;
        imagen.src = `${data.sprites.front_default}`;
        altura.innerHTML = `<h3>${data.height}</h3>`;

        data.types.forEach(element => {
            tipo.innerHTML = tipo.innerHTML + `<li>${element.type.name}</li>`;
        });

    } catch (error) {
        
        imagen.src = "";
        tipo.innerHTML = ``;
        altura.innerHTML = ``;
        nombre.innerHTML = `<p>No se encontro el Pokemon.</p>`;
        console.error("Error al obtener datos", error);
    }
}