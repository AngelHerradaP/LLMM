const nombre = "Éxarion";
const armaPrincipal = "Espada del destino";
const cabecera = "Estado del héroe:";
const cabeceraCombate = "Estado del héroe después del combate:";

let nivel = 5;
let puntosVida = 100;
let armaSecundaria = "Arco simple";
let tieneArmadura = true;

console.log (cabecera,"\nNombre: ",nombre,"\nNivel: ",nivel,"\nPuntos de vida: ",puntosVida,"\nArma principal: ",armaPrincipal,"\nArma secundaria: ",armaSecundaria,"\nTiene armadura: ",tieneArmadura);

nivel++;
puntosVida -= 30;

console.log (cabeceraCombate,"\nNombre: ",nombre,"\nNivel: ",nivel,"\nPuntos de vida: ",puntosVida,"\nArma principal: ",armaPrincipal,"\nArma secundaria: ",armaSecundaria,"\nTiene armadura: ",tieneArmadura);

let nivelCadena = nivel.toString();
let puntosFloat = parseFloat(puntosVida);

console.log("Nivel Cadena: ",nivelCadena,"\nPuntos float: ",puntosFloat);

let danyoBase = 50;
let mulDanyoCrit = 2;
let probDanyoCrit = 0.5;
let esCritico = probDanyoCrit>Math.random();
let danyoTotal = esCritico ? danyoBase * mulDanyoCrit : danyoBase;

console.log("El héroe inflinge",danyoTotal,"puntos de daño porque esCritico tiene valor",esCritico);

nivel = 0;
let dificultad = 1;
let xpActual = 90;
let xpGanada = 30;
let xpNecesaria = 100;

xpActual += xpGanada;

if (xpActual >= xpNecesaria) {
    nivel++;
    xpActual -= xpNecesaria;
}

console.log("Nivel de dificultad:\n1.- Novato\n2.- Media\n3.- Profesional\nNivel de dificultad: ",dificultad,"\nNivel: ",nivel,"\nExperiencia Actual: ",xpActual);

let monedas = [1,20,5];
let atuendos = ["Duende","Arquero","Caballero"];
let sumaMonedas = 0;
monedas.forEach(element => {
    
    sumaMonedas+= element;
});

console.log(sumaMonedas);

atuendos.push("Mago");
atuendos.forEach((dato, indice) => {

    console.log("Atuendo",indice,":",dato);
});

let curacion = 40;
console.log("Puntos de vida antes de curarte: ",puntosVida);

function curar(puntosVida, curacion) {
    
    return puntosVida = Math.min(puntosVida+curacion, 100);
}


console.log("Puntos de vida despues de curarte: ",curar(puntosVida,curacion));