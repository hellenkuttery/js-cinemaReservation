const container=document.querySelector(".container");
const movieType=document.querySelector("#movies")
const amount=document.getElementById("amount")
const price=document.getElementById("price")
console.log(amount.innerHTML)


container.addEventListener("click",function(e){
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
       e.target.classList.toggle("selected")
       let countSelected= container.querySelectorAll(".seat.selected").length -1;
       amount.innerText=countSelected;
       let priceTag=movieType.value
       let total = countSelected * priceTag
       price.innerText=total

    }
  
})
