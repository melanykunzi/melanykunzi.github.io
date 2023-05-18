const botonRandom = document.getElementById("random");
const numeroRandomhtml = document.getElementById("numeroRandom");
let puedeElegir = false;
let puedeTocarBoton = true;
let numeroRandom;
const elementos = document.querySelectorAll(".elementoClick");
const reset = document.getElementById("reset");
const gano = document.getElementById("gano");
const perdio = document.getElementById("perdio");

let lista = [0,0,0,0,0,0,0,0,0,0]

const botonReset = document.getElementById("reset");
botonReset.addEventListener("click", function() {
  location.reload();
});

function randomIntFrom1To999() {
    return Math.floor(Math.random() * 999) + 1;
}

function agregarALista(id, numeroRandom) {
    lista[id - 1] = numeroRandom;
    if (!lista.includes(0)){
        juego_terminado();
    }
}

botonRandom.addEventListener("click", function() {
    if (puedeTocarBoton == true){
        numeroRandom = randomIntFrom1To999();
        numeroRandomhtml.innerHTML = numeroRandom;
        puedeElegir = true;
        puedeTocarBoton = false;
    }

})
elementos.forEach(elemento => {
  elemento.addEventListener("click", function() {
    let id = elemento.id;
    agregarALista(id, numeroRandom);
    console.log(lista);
    if (puedeElegir == true) {
      this.innerHTML += " " + numeroRandom;
      puedeElegir = false;
      puedeTocarBoton = true;
    }
  });
});

function juego_terminado(){
    let listaOrdenada = lista.slice();
    listaOrdenada.sort(function(a, b) {
        return a - b;
    });
    if (lista === listaOrdenada){
        console.log('ganaste')
        gano.style.display = "block";
    } else {
        console.log('perdiste')
        perdio.hidden = false;
    }
}

