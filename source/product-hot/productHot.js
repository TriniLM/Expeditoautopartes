import functionObserver from "../observerFunction.js";
window.addEventListener("load",()=>{
  const productCard = document.querySelectorAll(".product-hot__card");
  const productConteiner = document.querySelector(".product-hot-conteiner");
  const left = document.getElementById("product-hot_left");
  const right = document.getElementById("product-hot_right");
  right.addEventListener("click",()=>{
    productConteiner.scrollBy({
      left:300,
      behavior:"smooth"
    });
  });
  left.addEventListener("click",()=>{
    productConteiner.scrollBy({
      left:-300,
      behavior:"smooth"
    });
  });
productCard.forEach((e)=>{
  functionObserver(e,"show-card-product", true);
});
});