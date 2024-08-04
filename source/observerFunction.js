export default function functionObserver(element,clase) {
    // Definir el callback handleIntersect
    let handleIntersect = (entries, observer) => {
        if (entries[0].isIntersecting) {
            element.classList.add(clase)
        }
    };
    // Definir las opciones del IntersectionObserver
    const options = {
        root: null, // Usa el viewport como root
        rootMargin: '0px', // Sin margen
        threshold: 0.1// 10% de visibilidad
    };
    // Crear el observador
    let observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
}