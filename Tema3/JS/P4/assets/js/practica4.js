//Declaramos las constantes
const PARRAFO = document.querySelector("#capa1");
const FOTO_INVISIBLE = document.querySelector("#capa3");
const EDAD = document.querySelector("#capa5");
const FONDO = document.querySelector("#negro");
const BOTON_FONDO = document.querySelector(".botonFondo");
const A = document.querySelector("#capa9");

//Capa 1
PARRAFO.addEventListener("mouseenter", () => {PARRAFO.style.color = "red"});
PARRAFO.addEventListener("mouseleave", () => {PARRAFO.style.color = "black"});

//Capa 3
function parImpar() {
    let num = parseInt(prompt('Introduce un número:'));
    
    if (!isNaN(num)){
      if(num %2 == 0){
        alert('Es par.');
      } else{
        alert('Es impar');
      }
   }
}

NUMERO_PAR.addEventListener("mouseleave", parImpar);

//Capa 5
DOBLE_CLICK.addEventListener("dblclick", () => alert('Has realizado doble click'));

//Capa 7

function cambiaFondo() {

  
}

BOTON_FONDO.addEventListener("click", cambiaFondo);

//Capa 9
function multiplicar() {
    let num = parseInt(prompt('Introduce un número:'));
   let num2 = parseInt(prompt('Introduce un número:'));
  
    if (!isNaN(num)) {
      if (!isNaN(num2)) {
        let multiplicacion = num * num2;
        alert("el resultado es: " + multiplicacion);
      }
    }
}

MULTIPLICACION.addEventListener("mouseenter", multiplicar);