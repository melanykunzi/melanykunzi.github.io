const botonRandom = document.getElementById("random");
const numeroRandomhtml = document.getElementById("numeroRandom");
let puedeElegir = false;
let numeroRandom;
const elementos = document.querySelectorAll(".elementoClick");
const reset = document.getElementById("reset");
let lista = [0,0,0,0,0,0,0,0,0,0]
const botonReset = document.getElementById("reset");

botonReset.addEventListener("click", function() {
  location.reload();
});

function randomIntFrom1To999() {
    return Math.floor(Math.random() * 999) + 1;
}

botonRandom.addEventListener("click", function() {
    numeroRandom = randomIntFrom1To999();
    numeroRandomhtml.innerHTML = numeroRandom;
    puedeElegir = true;
})

elementos.forEach(elemento => {
  elemento.addEventListener("click", function() {
    if (puedeElegir == true) {
      this.innerHTML += " " + numeroRandom;
      puedeElegir = false;
    }
  });
});

