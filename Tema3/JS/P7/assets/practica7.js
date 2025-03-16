const BOTON_NUMERO = document.querySelectorAll("#botonNum");
const BOTON_OPERACION = document.querySelectorAll("#botonOp");
const BOTON_CLEAR = document.querySelector("#botonClear");
const BOTON_RESULTADO = document.querySelector("#botonResultado");
const RESULTADO = document.querySelector("#resultado");

let primerOp = "0";
let segundoOp = "0";
let operando;
let primerNumero = true;
let operandoSeleccionado = false;

BOTON_RESULTADO.addEventListener("click", calcularResultado);
BOTON_CLEAR.addEventListener("click", limpiarCompleto);

BOTON_NUMERO.forEach(numero => {
    numero.addEventListener("click", () =>{
        if (!operandoSeleccionado) {
            if (primerNumero) {
                RESULTADO.value = "";
                primerNumero = false;
            }
            if (!primerOp.includes(".") || !(primerOp.includes(".") && numero.value == ".")) {
                RESULTADO.value += numero.value;
                primerOp = RESULTADO.value;
            }
        }else {
            if (primerNumero) {
                RESULTADO.value = "";
                primerNumero = false;
            }
            if (!segundoOp.includes(".") || !(segundoOp.includes(".") && numero.value == ".")) {
                RESULTADO.value += numero.value;
                segundoOp = RESULTADO.value;
            }
        }    
    });
});

BOTON_OPERACION.forEach(operacion => {
    operacion.addEventListener("click", () =>{
        operando = operacion.value;
        RESULTADO.value = operando;
        operandoSeleccionado = true;
        primerNumero = true;
    });
});

function calcularResultado() {
    switch (operando) {
        case "/":
            RESULTADO.value = parseFloat(primerOp) / parseFloat(segundoOp);
            break;
        case "*":
            RESULTADO.value = parseFloat(primerOp) * parseFloat(segundoOp);
            break;
        case "-":
            RESULTADO.value = parseFloat(primerOp) - parseFloat(segundoOp);
            break;
        case "+":
            RESULTADO.value = parseFloat(primerOp) + parseFloat(segundoOp);
            break;
    }   
    limpiar();
}

function limpiar() {
    primerOp = "";
    segundoOp = "";
    operacion = "";
    primerNumero = true;
    operandoSeleccionado = false;
}

function limpiarCompleto() {
    limpiar();
    RESULTADO.value = 0;
}