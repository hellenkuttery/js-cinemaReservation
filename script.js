const container=document.querySelector(".container");
const movieType=document.querySelector("#movies");
const amount=document.getElementById("amount");
const price=document.getElementById("price");
const seats=document.querySelectorAll(".seat:not(.reserved)");



container.addEventListener("click",function(e){
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
       e.target.classList.toggle("selected")
      calculateTotal();    } 
})

container.addEventListener("change",function(e){
    calculateTotal()
})

function calculateTotal(){
    const selectedSeats=container.querySelectorAll(".seat.selected")
    console.log(seats)
    const selectedSeatsArr=[]
    const seatsArr=[]

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat)
    })

    seats.forEach(function(seat){
        seatsArr.push(seat)
    })

    let selectedSeatsIndexs=selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })
   console.log(selectedSeatsIndexs)

    let countSelected= selectedSeats.length;
    amount.innerText=countSelected;
    let priceTag=movieType.value
    let total = countSelected * priceTag
    price.innerText=total

    saveLocalStorage(selectedSeatsIndexs)
}

function saveLocalStorage(index){
    localStorage.setItem("selectedSeats",JSON.stringify(index))
    localStorage.setItem("selectedMovieIndex",movieType.selectedIndex)
}