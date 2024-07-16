const input=document.querySelector("#input")
const btn=document.querySelector("#submitBtn")
const uList=document.querySelector(".lists")
const error=document.querySelector(".error")
btn.addEventListener("click",(e)=>{
    let value=input.value
    console.log(value.length)
    if(value.length<5){
        error.style.display="block"
        btn.style.backgroundColor="red"
        
    }
    else{
        error.style.display="none"
        btn.style.backgroundColor="rgb(100, 100, 194)"
        uList.innerHTML+=`<li>${value}</li>`
    }
    input.value=""
})


// part2

const nameInput=document.querySelector("#name")
const link=document.querySelector("#link")
const age=document.querySelector("#age")
const add=document.querySelector("#submitBtn2")
const cards=document.querySelector(".cards")
const reset=document.querySelector("#reset")
add.addEventListener("click",function(){
    let newCard=`
    <div class="card">
        <img src="${link.value}" alt="">
        <h1>Name:${nameInput.value}</h1>
        <p>Age:${age.value}</p>
    </div>
    `
    cards.innerHTML+=newCard;
    nameInput.value=""
    link.value=""
    age.value=""

})
reset.addEventListener("click",function(){
    cards.innerHTML="";
})

