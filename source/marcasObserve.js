import functionObserver from "./observerFunction.js";
window.addEventListener("load",()=>{
const marcas =  document.querySelectorAll(".marcas-cards__card");
console.log(marcas)
marcas.forEach(element => {
    functionObserver(element, "marcas-cards__card-visible");
})
})