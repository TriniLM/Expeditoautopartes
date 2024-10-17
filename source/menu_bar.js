window.addEventListener("load", ()=>{
    let menuBar = document.getElementById("menu__bar");
    let header = document.getElementById("header");
    menuBar.addEventListener("click",(e)=>{
    header.classList.toggle("header__menu-bar-active");
    console.log("menu")
});
});