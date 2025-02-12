//Declaramos las constantes
const BODY = document.querySelector("body");
const UN_CLICK = document.querySelector("#capa1");
const NUMERO_MAX = document.querySelector("#capa2");
const NUMERO_PAR = document.querySelector("#capa3");
const DOBLE_CLICK = document.querySelector("#capa4");
const BOTON_CONTADOR = document.querySelector("#capa5");
const MULTIPLICACION = document.querySelector("#capa6");

//Mensaje de bienvenida
BODY.addEventListener("Load", () => alert('Bienvenidos a la prácticas de eventos'));

//Capa 1
UN_CLICK.addEventListener("click", () => alert('Has realizado un click'));

//Capa 2
function maximo() {
    let num = parseInt(prompt('Introduce un número:'));
    let num2 = parseInt(prompt('Introduce un número:'));

    if (!isNaN(num)) {
        if (!isNaN(num2)) {
            alert("El número máximo es " + Math.max(num, num2));
        } else {
            alert('Introduce un número válido.');
        }
    } else {
        alert('Introduce un número válido.');
    }
}

NUMERO_MAX.addEventListener("click", maximo);

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

//Capa 4
DOBLE_CLICK.addEventListener("dblclick", () => alert('Has realizado doble click'));

//Capa 5
let i = 0;
function cuentaClicks() {
  i++;
  alert("Clicks: " + i);
}

BOTON_CONTADOR.addEventListener("click", cuentaClicks);

//Capa 6
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