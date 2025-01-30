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