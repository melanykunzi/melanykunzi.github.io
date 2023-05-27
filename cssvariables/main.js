var colorPicker = document.getElementById("colorPicker");
var textToColor = document.getElementById("js");
var imagen = document.getElementById("imagen");
var spacing = document.getElementById("spacing");
var blur = document.getElementById("blur");

colorPicker.addEventListener("input", function() {
  var selectedColor = colorPicker.value;
  js.style.setProperty("--color", selectedColor);
  imagen.style.setProperty("--color", selectedColor);
});
spacing.addEventListener("input", function() {
    var value = spacing.value;
    imagen.style.setProperty("--spacing", `${spacing.value}px`);
});
blur.addEventListener("input", function() {
    var value = blur.value;
    imagen.style.setProperty("--blur", `${blur.value}px`);
});