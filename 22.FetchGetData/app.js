const btn=document.querySelector(".getDataBtn")
const cards=document.querySelector(".cards")
let arr=[]
btn.addEventListener("click",function(){
    fetch("https://fakestoreapi.com/products").then((res)=>res.json().then((data)=>
{
    data.forEach((elem)=>{
        let newCard=`
         <div class="box">
            <div class="card" style="width: 18rem;">
        <img src="${elem.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${elem.title}</h5>
          <h4>Price : ${elem.price}$</h4>
          <p>Category : ${elem.category}</p>
          <p class="card-text">${elem.description}</p>
          <p>Rate : ${elem.rating.rate}   |  Count : ${elem.rating.count}</p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
        </div>
        `
        cards.innerHTML+=newCard
    })

})).catch((err)=>console.log(err))
})

console.log(arr)