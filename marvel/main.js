// Obtiene la lista de películas vistas del almacenamiento local
var peliculasConFiltro = JSON.parse(localStorage.getItem("peliculasConFiltro")) || [];

// Función para agregar una imagen a la lista de vistas
function agregarImagen(img) {
  // Mostrar mensaje de confirmación
  if (confirm("¿Agregar a Vistas?")) {
    // Obtener el alt de la imagen
    var alt = img.alt;
    
    // Agregar el alt al array de imágenes en vistas
    peliculasConFiltro.push(alt);

    // Guardar la lista de películas vistas en el almacenamiento local
    localStorage.setItem("peliculasConFiltro", JSON.stringify(peliculasConFiltro));

    // Recorre todas las imágenes y cambia el filtro si el alt de la imagen está en la lista
    var imagenes = document.getElementsByTagName("img");
    for (var i = 0; i < imagenes.length; i++) {
      var imagen = imagenes[i];
      var alt = imagen.getAttribute("alt");
      if (peliculasConFiltro.includes(alt)) {
        imagen.style.filter = "grayscale(0%)";
        imagen.style.border = "solid 1px red";
      }
    }
  }
}
// Recorre todas las imágenes y cambia el filtro si el alt de la imagen está en la lista
var imagenes = document.getElementsByTagName("img");
for (var i = 0; i < imagenes.length; i++) {
  var imagen = imagenes[i];
  var alt = imagen.getAttribute("alt");
  if (peliculasConFiltro.includes(alt)) {
    imagen.style.filter = "grayscale(0%)";
    imagen.style.border = "solid 1px red";
  }
}
