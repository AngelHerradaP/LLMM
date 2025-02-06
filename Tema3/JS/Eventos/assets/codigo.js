const p1 = document.querySelector(".niidea");
const p2 = document.querySelector("#niidea2");
const b = document.querySelector("body");


p1.addEventListener("click", () => alert("Parrafo 1 click"));
p2.addEventListener("dblclick", () => alert("Doble click")); 
b.addEventListener("Load", mensaje());
function mensaje() {
    alert("Pagina cargada");    
}