var estadoLicuadora = 'apagada';
var licuadora = document.getElementById('blender');


function controlarLicuadora(){
    if (estadoLicuadora == 'apagada'){
        estadoLicuadora = 'encendido';
        console.log('me prendiste');
        agregarClase();
        reproducirSonidoBoton();
        reproducirSonidoLicuadora();
    } else {
        estadoLicuadora = 'apagada'
        console.log('me apagaste')
        eliminarClase();
        reproducirSonidoBoton();
        reproducirSonidoLicuadora();
    }
}
function agregarClase() {
    var miDiv = document.getElementById("blender");
    miDiv.classList.add("active");
}
function eliminarClase() {
    var miDiv = document.getElementById("blender");
    miDiv.classList.remove("active");
}
function reproducirSonidoBoton() {
    var miAudio = document.getElementById("boton-licuadora");
    miAudio.play();
}
function reproducirSonidoLicuadora() {
    var miAudio = document.getElementById("licuadora");
    miAudio.play();
    if (estadoLicuadora=='apagada'){
        miAudio.pause();
    }
}
  