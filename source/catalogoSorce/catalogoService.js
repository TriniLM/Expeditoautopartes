import functionObserver from "../observerFunction.js";
window.addEventListener("load",async ()=>{
    const catalogoContent = document.getElementById("productos");
    const categoria = new URLSearchParams(window.location.search).get('categoria');
    const getData = async () =>{
        let res = await fetch("https://cdn.jsdelivr.net/gh/TriniLM/dbEspedito@main/catalogo.json");
        let data = await res.json();
        return data;
    }
    const product = await getData();
    //funcion para renderizar o dibujar la lista de productos
const renderList = (name,description)=>{
    let li = document.createElement("li");
    li.classList.add("content-product__items-product");
    let template = ` <figure class="items-product__img">
                    <img src="../img/product-hot/200872.png" alt="${description}">
                     </figure>
                    <h3 class="items-product__title">${description}</h3>
                    <a href="https://wa.me/18097052885?text=Hola, me interesaría saber más sobre: ${description} https://trinilm.github.io/Expeditoautopartes/img/product-hot/200872.png" target"_black"> 
                    <button class="items-product__btn">Más detalles</button>
                    </a>
                    `;
    li.innerHTML = template;
    return li;
}
const renderProduct =(parent, categoria)=>{
    if(categoria ==="TODAS"){
        product.catalogo.forEach(e =>{
            parent.appendChild(renderList(e.Categoría,e.Descripción))
        })
    }
    else{
        product.catalogo.filter(elem => {
            if(elem.Categoría === categoria){
              parent.appendChild(renderList(elem.Categoría,elem.Descripción))
           }
    } 
 ) 
}}
   renderProduct(catalogoContent,categoria); 
   let cardsProduct = document.querySelectorAll(".content-product__items-product");
   cardsProduct.forEach((e)=>{
    functionObserver(e, "card-product__active")
   })
 }) 
