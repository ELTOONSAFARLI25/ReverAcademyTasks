const text=document.querySelector(".text")
const color=document.querySelector(".color")
const textBox=document.querySelector(".textBox")
const span=document.querySelector(".span")
const button=document.querySelector(".button")
const box=document.querySelector(".box")
let n=prompt("enter button click limit!")
n=Number(n)
span.innerHTML=n;

button.addEventListener("click",(e)=>{
    if(n>0){
        n--;
        span.innerHTML=n;
        textBox.innerHTML=text.value;
        box.style.backgroundColor=color.value
        text.value=""
        color.value="#FFD700"
        // box.style.tranform="rotate(7deg)"
    }
    else{
        // location.reload()
        alert("Limit exceeded!")
        button.style.backgroundColor="#FF0000"
    }
    
})
