const minus=document.querySelector(".minus")
const pilus=document.querySelector(".pilus")
const number=document.querySelector("#input")
const reset=document.querySelector(".reset")
pilus.addEventListener("click",(e)=>{
    number.value++;
    if(number.value>=0){
        minus.style.backgroundColor="blueviolet";
    }
})
minus.addEventListener("click",(e)=>{
    if(number.value>0){
        number.value--;
    }
    else{
        minus.style.backgroundColor="lightblue";
    }
    
})
reset.addEventListener("click",(e)=>{
    number.value="0"
})