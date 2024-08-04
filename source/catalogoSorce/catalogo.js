const navCatalogo = document.getElementById("navCatalogo");
const navBtnCatalogo = document.getElementById("nav__btn-catalogo");
navBtnCatalogo.addEventListener("click", ()=>{
    navCatalogo.classList.toggle("nav__active")
})