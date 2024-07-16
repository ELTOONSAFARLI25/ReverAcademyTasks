function calculator(num1,num2,operator){
    let p=1;
    let i=0;
    p=Number(p);
    if(operator=="+"){
        return num1 + num2;
    }
    else if(operator== "-"){
        return num1-num2;
    }
    else if(operator == "*"){
        return num1 * num2;
    }
    else if(operator== "/"){
        return num1 / num2;
    }
    else if(operator== "//"){
        return Math.floor(num1/num2);
    }
    else if(operator=="**"){
        while(i<num2){
            p=p*num1;
            i++;
        }
        return p;
    }
    else{
        alert("operator is incorrect...") ;
    }
}
let num1=prompt("enter num1");
let num2=prompt("enter num2");
num1=Number(num1);
num2=Number(num2);
let operator=prompt("enter the oprator : ");
console.log(calculator(num1,num2,operator));