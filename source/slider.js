// Obteniendo los elementos necesarios
const slides = document.getElementById("slides");
const slide = document.querySelectorAll(".slider__slide");
const controls = document.querySelectorAll(".slider__control");
// Variables de índice
let index = 1;
let indexBefore = 0;
// Función para cambiar de posicion el slider
function traslateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  btnActual(index, indexBefore);
  indexBefore = index;
  index++;
  if (index === slide.length) {
    index = 0;
  }
}
// Función para actualizar los botones de control
function btnActual(actual, anterior) {
  controls[actual].classList.add("control__active");
  if (anterior != actual) {
    controls[anterior].classList.remove("control__active");
  }
}
// Función para iniciar el carrusel de imágenes
function startSlideShow() {
  return setInterval(traslateSlide, 5000);
}
// Iniciando el carrusel de imágenes
let intervalo = startSlideShow();
// Añadiendo controladores de eventos a los botones de control
controls.forEach((e) => {
  e.addEventListener("click", (e) => {
    let clickElement = parseInt(e.target.getAttribute("aria-label"));
    index = clickElement;
    clearInterval(intervalo);
    traslateSlide();
    intervalo = startSlideShow();
  });
});
