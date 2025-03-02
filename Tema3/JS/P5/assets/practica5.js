const NUM1 = document.querySelector(".numero1");
const NUM2 = document.querySelector(".numero2");
const OPERACION = document.querySelector("#operacion");
const RESULTADO = document.querySelector(".resultado");
const BOTON_CALCULAR = document.querySelector(".botonCalcular");
const TEXTO_ERROR = document.querySelector(".texto");

let resNum1;
let resNum2;
let seleccion;

function suma() {
    
    RESULTADO.value = resNum1 + resNum2;
}

function resta() {
    
    RESULTADO.value = resNum1 - resNum2;
}

function multiplicacion() {
    
    RESULTADO.value = resNum1 * resNum2;
}

function division() {
    
    if (resNum2 == 0) {
        
        TEXTO_ERROR.style.color = "red";
        TEXTO_ERROR.textContent = "ERROR, NO SE PUEDE DIVIDIR POR 0";

    }else{

        RESULTADO.value = resNum1 / resNum2;
    }
}

function calcular() {
    resNum1 = parseFloat(NUM1.value);
    resNum2 = parseFloat(NUM2.value);
    seleccion = OPERACION.value;

    switch (seleccion) {
    case "suma":
        
        suma();
        break;

    case "resta":
        
        resta();
        break;

    case "multiplicacion":
        
        multiplicacion();
        break;

    case "division":
        
        division();
        break;
    }
}

BOTON_CALCULAR.addEventListener("click", ()=> calcular());