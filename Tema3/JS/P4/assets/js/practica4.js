//Capa 1
const PARRAFO = document.querySelector("#capa1");

PARRAFO.addEventListener("mouseenter", () => {PARRAFO.style.color = "red"});
PARRAFO.addEventListener("mouseleave", () => {PARRAFO.style.color = "black"});

//Capa 2

const FOTO_INVISIBLE = document.querySelector("#capa3");

FOTO_INVISIBLE.addEventListener("mouseenter", () => cambiarImagen(FOTO_INVISIBLE));

function cambiarImagen(FOTO_INVISIBLE) {
  
  let nombreImagen = FOTO_INVISIBLE.src.split("/").pop();
  if (nombreImagen == "1.jpg") {
    
    FOTO_INVISIBLE.src = "./assets/img/2.jpg";
    
  }else{

    FOTO_INVISIBLE.src = "./assets/img/1.jpg";
  }
}

//Capa 3
const BOTON_EDAD = document.querySelector(".botonFormulario");

BOTON_EDAD.addEventListener("click", comprobarFormulario);

function comprobarFormulario() {
  
  let input = document.querySelector(".input");
  let numeroInput = input.value;
  let texto = document.querySelector("#texto");
  let comprobarCadena = numeroInput.length == 0 || isNaN(numeroInput);

  if (comprobarCadena) {
    
    input.style.borderColor = "red";
    texto.textContent = "Introduce un número valido";
  }else if (numeroInput >= 1 && numeroInput <= 100) {
    input.style.borderColor = "green";
    texto.textContent = "Número correcto";
    
  }else {

    input.style.borderColor = "red";
    texto.textContent = "Introduce un valor entre 1 y 100";
  }
}

//Capa 4
const FONDO = document.querySelectorAll(".negro");
const BOTON_FONDO = document.querySelector("#botonFondo");

BOTON_FONDO.addEventListener("click", () => cambiaFondo(FONDO));

function cambiaFondo(FONDO) {

  FONDO.forEach(element => {
    element.classList.toggle("rojo");
  });
};

//Capa 5
const CAPA9 = document.querySelector(".a9");
const BOTON1 = document.querySelector(".b1");
const BOTON2 = document.querySelector(".b2");
const BOTON3 = document.querySelector(".b3");

BOTON1.addEventListener("click", () => {

  CAPA9.style.borderColor = "black";
  CAPA9.style.color = "white";
  CAPA9.style.backgroundColor = "black";
});
BOTON2.addEventListener("click", () => {
  
  CAPA9.style.color = "black";
  CAPA9.style.backgroundColor = "white";
});
BOTON3.addEventListener("click", () => {
  
  CAPA9.style.borderColor = "black";
  CAPA9.style.color = "red";
  CAPA9.style.backgroundColor = "grey";
});