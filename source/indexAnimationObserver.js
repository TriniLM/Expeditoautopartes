function functionObserver(element,clase) {
    // Definir el callback handleIntersect
    let handleIntersect = (entries, observer) => {
        if (entries[0].isIntersecting) {
            element.classList.add(clase)
        }
        else{
            element.classList.remove(clase)
        }
    };
    // Definir las opciones del IntersectionObserver
    const options = {
        root: null, // Usa el viewport como root
        rootMargin: '0px', // Sin margen
        threshold: 0.4// 10% de visibilidad
    };
    // Crear el observador
    let observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
}
//seleccionar todos los elementos del index que seran animados con css y el observer
const claseAnimate = "animate-scale";
const shippingInfoText = document.querySelector(".shipping-info__text");
const shippingInfoImg = document.querySelector(".shipping-info__img");

functionObserver(shippingInfoText,claseAnimate);
functionObserver(shippingInfoImg,claseAnimate);