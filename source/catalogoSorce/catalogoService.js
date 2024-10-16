import functionObserver from "../observerFunction.js";
window.addEventListener("load",async ()=>{
    const catalogoContent = document.getElementById("productos");
    const categoria = new URLSearchParams(window.location.search).get('categoria');
    const getData = async () =>{
        let res = await fetch("../db/catalogo.json");
        let data = await res.json();
        return data;
    }
    const product = await getData();
    //funcion para renderizar o dibujar la lista de productos
const renderList = (description,image)=>{
    let li = document.createElement("li");
    li.classList.add("content-product__items-product");
    let template = ` <figure class="items-product__img">
                    <img src= ${image? image:"https://res.cloudinary.com/dclgwdu77/image/upload/f_auto,q_auto/tlws4gsfbvstvjlzdfo5"} alt="${description}">
                     </figure>
                    <h3 class="items-product__title">${description}</h3>
                    <a href="https://wa.me/18297605867?text=Hola,%20me%20interesaría%20saber%20más%20sobre:%20${description}%20${image}" target="_blank">
                    <button class="items-product__btn">Más detalles</button>
                    </a>
                    `;
    li.innerHTML = template;
    return li;
};
const renderProduct =(parent, categoria)=>{
    let categoriaElement = categoria === null || categoria === ""? "TODAS": categoria
    if(categoriaElement === "TODAS"){
        product.catalogo.forEach(e =>{
            parent.appendChild(renderList(e.Categoría,e.Descripción, e.img))
        })
    }
    else{
        product.catalogo.filter(elem => {
            if(elem.Categoría === categoriaElement){
              parent.appendChild(renderList(elem.Descripción, elem.img))
           };
    } 
 )
}};
   renderProduct(catalogoContent,categoria); 
   let cardsProduct = document.querySelectorAll(".content-product__items-product");
   cardsProduct.forEach((e)=>{
    functionObserver(e, "card-product__active")
   })
 });
