const input=document.querySelector("#calc-input");
const output=document.querySelector("#calc-result");
console.log(output.value)
const backSpace=document.querySelector("#delete");
const buttons=document.querySelectorAll(".calc-button");
let result="";
const operators=["%","÷","×","−","+","+/−",".","="];

backSpace.addEventListener("click",()=>{
    let n = input.innerText.length ;
    input.innerText = input.innerText.slice(0,n-1)
})

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=> {
        input.innerText = input.innerText + e.target.innerText

        if(input.textContent[input.textContent.length-1] != "-" || input.textContent[input.textContent.length-1] != "+" || input.textContent[input.textContent.length-1] != "×" || input.textContent[input.textContent.length-1] != "÷" ){
            if(input.includes('-') || input.includes('+') || input.includes('×') || input.includes('÷')){
                output.innerText = calculate(input.innerText) ;
            }
        }
    })

})

function calculate(text){
      

}