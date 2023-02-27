var sonidos = {
    'a': 'sounds/C4.mp3',
    'w': 'sounds/Db4.mp3',
    's': 'sounds/D4.mp3',
    'e': 'sounds/Eb4.mp3',
    'd': 'sounds/E4.mp3',
    'f': 'sounds/F4.mp3',
    'r': 'sounds/Gb4.mp3',
    'g': 'sounds/G4.mp3',
    't': 'sounds/Ab4.mp3',
    'h': 'sounds/A4.mp3',
    'y': 'sounds/Bb4.mp3',
    'j': 'sounds/B4.mp3',
    'k': 'sounds/C5.mp3',
    'u': 'sounds/Db5.mp3',
    'l': 'sounds/D5.mp3',
    'i': 'sounds/Eb5.mp3',
    'ñ': 'sounds/E5.mp3'
}
const clases = {
    'a': 'C4-key',
    'w': 'Db4-key',
    's': 'D4-key',
    'e': 'Eb4-key',
    'd': 'E4-key',
    'f': 'F4-key',
    'r': 'Gb4-key',
    'g': 'G4-key',
    't': 'Ab4-key',
    'h': 'A4-key',
    'y': 'Bb4-key',
    'j': 'B4-key',
    'k': 'C5-key',
    'u': 'Db5-key',
    'l': 'D5-key',
    'i': 'Eb5-key',
    'ñ': 'E5-key'
}
document.addEventListener("keydown", function(event) {
    var teclaPresionada = event.key.toLowerCase();
    if (sonidos.hasOwnProperty(teclaPresionada)) {
      var audio = new Audio((sonidos[teclaPresionada]));
      audio.play();
    }
});
document.addEventListener("keydown", function(event) {
    var teclaPresionada = event.key.toLowerCase();
    if (clases.hasOwnProperty(teclaPresionada)) {
      const myButton = document.querySelector(`.${clases[teclaPresionada]}`);
      myButton.classList.add('gray');
    }
});
document.addEventListener("keyup", function(event) {
  var teclaPresionada = event.key.toLowerCase();
  if (clases.hasOwnProperty(teclaPresionada)) {
    const myButton = document.querySelector(`.${clases[teclaPresionada]}`);
    myButton.classList.remove('gray');
  }
});