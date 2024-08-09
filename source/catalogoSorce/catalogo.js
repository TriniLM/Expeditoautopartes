import functionObserver from "../observerFunction.js";
functionObserver
window.addEventListener("load", () => {
    const cardCategory = document.querySelectorAll(".card-category");
    const btnCategory = document.querySelectorAll(".card-category__buttom");
    btnCategory.forEach((e) => {
        e.addEventListener("click", (e) => {
            let parameter = e.target.getAttribute('btn-category');
            window.location.href = `categoriaList.html?categoria=${parameter}`;
        })
    })

    cardCategory.forEach((e)=>{
        functionObserver(e,"btn-category_visible")
    })
})