var sonidos = {
    'a': 'sounds/clap.wav',
    's': 'sounds/hihat.wav',
    'd': 'sounds/kick.wav',
    'f': 'sounds/openhat.wav',
    'g': 'sounds/boom.wav',
    'h': 'sounds/ride.wav',
    'j': 'sounds/snare.wav',
    'k': 'sounds/tom.wav',
    'l': 'sounds/tink.wav'
  };
  
// Obtén todas las teclas
const keys = document.querySelectorAll('.key');
  
// Agrega un evento de escucha a cada tecla con click
keys.forEach(key => {
    key.addEventListener('click', () => {
      key.classList.add('active');
      setTimeout(() => {
        key.classList.remove('active');
      }, 100);
      
      const tecla = key.id.slice(4); // Obtiene la letra de la tecla desde el ID del div
      reproducirSonido(tecla);
    });
});

// Agrega un evento de escucha para las teclas del teclado
document.addEventListener('keydown', event => {
    const tecla = event.key.toLowerCase();
    const keyElement = document.getElementById(`key-${tecla}`);
    
    if (keyElement) {
      keyElement.classList.add('active');
      setTimeout(() => {
        keyElement.classList.remove('active');
      }, 100);
      
      reproducirSonido(tecla);
    }
});
  
function reproducirSonido(tecla) {
    if (sonidos.hasOwnProperty(tecla)) {
      var audio = new Audio(sonidos[tecla]);
      audio.play();
    }
}
  