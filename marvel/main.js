var imagenes = document.getElementsByTagName("img");
var peliculasConFiltro = ["Iron Man", "Iron Man 2"];
// Recorre todas las imágenes y cambia el filtro si el alt de la imagen está en la lista
for (var i = 0; i < imagenes.length; i++) {
  var imagen = imagenes[i];
  var alt = imagen.getAttribute("alt");
  if (peliculasConFiltro.includes(alt)) {
    imagen.style.filter = "grayscale(0%)";
    imagen.style.border = "solid 1px red";
  }
}