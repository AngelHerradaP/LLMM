const BOTON_NUMERO = document.querySelectorAll("#botonNum");
const BOTON_OPERACION = document.querySelectorAll("#botonOp");
const RESULTADO = document.querySelector("#resultado");

let primerOp;
let segundoOp;
let operacion;
let primerNumero = true;

BOTON_NUMERO.forEach(element => {
    element.addEventListener("click", () =>{
        if (primerNumero) {
            RESULTADO.value = "";
            primerNumero = false;
        }
        RESULTADO.value += element.value;
         
    });
});