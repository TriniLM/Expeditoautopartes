const productContent = document.getElementById("produtHotContent");
const productCard = document.querySelectorAll(".product-hot__card");
const left = document.getElementById('leftProduct');
const rigth = document.getElementById("rigthProduct")
let counter = 0;
let detener = false;
rigth.addEventListener("click",()=>{
  if(!detener){
    counter++;
    console.log(counter)
    let traslateCalc = counter * 300 + 20;
    productContent.style.transform = `translateX(-${traslateCalc}px)`
  }
})
left.addEventListener("click",(e)=>{
    if(!counter == 0){
        console.log(counter)
        counter--;
        let traslateCalc = counter * 300 + 40;
        productContent.style.transform = `translateX(-${traslateCalc}px)`
      }
})
const handleIntersect = (entries,observe)=>{
if(entries[0].isIntersecting){
    detener = true;
}
else{
    detener = false;
}
}
let observer = new IntersectionObserver(handleIntersect,{
    root: null, // Usa el viewport como root
    rootMargin: '0px', // Sin margen
    threshold: .2// 10% de visibilidad
});

observer.observe(productCard[9])