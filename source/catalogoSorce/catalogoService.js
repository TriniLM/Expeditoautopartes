window.addEventListener("load",()=>{
    // obeteniendo las categorias donde incrustaremos la lista de productos
const bandas = document.getElementById("bandas");
const casquillo = document.getElementById("casquillo");
const chapa = document.getElementById("chapa");
//obteniendo el titulo de la categoria para hacer que cuando este se muestre en pantalla la lista se cargue
const bandasIntersecting = document.getElementById("bandasInterseting");
const casquilloIntersecting =  document.getElementById("casquilloIntersecting");
const chapaIntersecting =  document.getElementById("chapaIntersecting")
//funcion para renderizar o dibujar la lista de productos
const renderList = (name,description)=>{
    let li = document.createElement("li");
    li.classList.add("content-product__items-product");
    let template = ` <figure class="items-product__img">
                    <img src="../img/product-hot/200872.png" alt="${description}">
                     </figure>
                    <h3 class="items-product__title">${name}</h3>
                    <a href="https://wa.me/18097052885?text=Hola, me interesaría saber más sobre: ${description}"> 
                    <button class="items-product__btn">Pedir</button>
                    </a>
                    `;
    li.innerHTML = template;
    return li;
}
//funcion observadora del titulo para cuando este se muestre en el viewport se ejecute la funcion que va 
//incrustar los elementos
function functionObserver(element,functionEjecut) {
    // Definir el callback handleIntersect
    let handleIntersect = (entries, ) => {
        if (entries[0].isIntersecting) {
            functionEjecut()
            observer.disconnect()
        }
    };
    // Definir las opciones del IntersectionObserver
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    };
    // Crear el observador
    let observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
}
//funcion para obtener los datos
const getData = async () =>{
    let res = await fetch("https://cdn.jsdelivr.net/gh/TriniLM/dbEspedito@main/catalogo.json");
    let data = await res.json();
    return data;
}
// aqui vamos a declarar las funciones que se ejecutaran cuando el titulo entre en el viewport
const bandasListProduct = () =>{
    getData().then(data =>{
        data.catalogo.filter(elem => {
         if(elem.Categoría === "BANDAS"){
             bandas.appendChild(renderList(elem.Categoría, elem.Descripción))
         }
        })
     })     
}
const casquilloListProduct = () =>{
    getData().then(data =>{
        data.catalogo.filter(elem => {
         if(elem.Categoría === "CASQUILLO"){
             casquillo.appendChild(renderList(elem.Categoría,elem.Descripción))
         }
        })
     })     
}
const chapaListProduct = () =>{
    getData().then(data =>{
        data.catalogo.filter(elem => {
         if(elem.Categoría === "CHAPAS"){
             chapa.appendChild(renderList(elem.Categoría,elem.Descripción))
         }
        })
     })     
}
// ejecucion del observador dandole el elemento a observar y la funcion a ejecutar
functionObserver(bandasIntersecting, bandasListProduct)
functionObserver(casquilloIntersecting, casquilloListProduct)
functionObserver(chapaIntersecting, chapaListProduct)
})
