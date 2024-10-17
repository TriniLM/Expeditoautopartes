window.addEventListener("load",()=>{
    const btnNavProduct = document.getElementById("btnProductNav");
    const productsNavlist = document.getElementById("productsNavlist");
    const itemsProductList = document.querySelectorAll(".products-nav__list-items");
    btnNavProduct.addEventListener("click", ()=>{
        productsNavlist.classList.toggle("products-nav__list-active");
    });
    itemsProductList.forEach((e)=>{
        e.addEventListener("click",(e)=>{
            let newParamenter = e.target.getAttribute("categoria-name");
            window.location.href = `categoriaList.html?categoria=${newParamenter}`;
        })
    })
});