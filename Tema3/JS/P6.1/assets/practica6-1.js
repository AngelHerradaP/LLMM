const btn = document.querySelector(".botonBuscar");
btn.addEventListener("click", buscarPelicula);



const titulo = document.querySelector(".titulo");
const anyo = document.querySelector(".anyo");
const duracion = document.querySelector(".duracion");
const desplegable = document.querySelector(".desplegable");
const casillaNota = document.querySelector(".casillaNota");
const error = document.querySelector(".error");   
const medioValoracion = new Map();

async function buscarPelicula() {
    
    const nombrePelicula = document.querySelector(".pelicula").value;
    const url = `https://www.omdbapi.com/?t=${nombrePelicula}&apikey=6bd47da3`;
    const response = await fetch(url);
    const data = await response.json(); 
    error.innerHTML = "";
    desplegable.innerHTML = "";
    medioValoracion.clear;

    if (nombrePelicula == "") {
        
        noDefinido("La barra de busqueda no puede estar en blanco");
        

    }else if (data.Title == undefined) {
        
        noDefinido("No hay ninguna pelicula que coincida con la busqueda");
    
    }else{

        titulo.innerHTML = `<p>${data.Title}</p>`;
        anyo.innerHTML = `<p>${data.Year}</p>`;
        duracion.innerHTML = `<p>${data.Runtime}</p>`;

        for (let index = 0; index < data.Ratings.length; index++) {
            
            desplegable.innerHTML = desplegable.innerHTML + `<option>${data.Ratings[index].Source}</option>`;
            medioValoracion.set(data.Ratings[index].Source, data.Ratings[index].Value);
        };

        casillaNota.innerHTML = `La valoracion es de: ${medioValoracion.get(desplegable.value)}`;
    }
}

function calcularValoracion() {

    
}

function noDefinido(textoError) {
    
    titulo.innerHTML = `<p>N/D</p>`;
    anyo.innerHTML = `<p>N/D</p>`;
    duracion.innerHTML = `<p>N/D</p>`;
    desplegable.innerHTML = `<option>N/D</option>`;
    casillaNota.innerHTML = `<p>N/D</p>`;
    error.innerHTML = textoError;
}