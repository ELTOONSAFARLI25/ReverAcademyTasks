// // Sual1

// // let i=10;
// // while(i<100){
// //     if(i%10==7){
// //         console.log(i);
// //     }
// //     i++;
// // }

// // Sual2
// // let i=10;
// // while(i<100){
// //     let a=Math.floor(i/10);
// //     let b=i%10;
// //     if(a==b){
// //         console.log(i);
// //     }
// //     i++;
// // }

// // Sual3
// // let n=prompt();
// // let max=0;
// // n=Number(n);
// // max=Number(max);
// // console.log("n=",n);
// // while(n>0){
// //     let r=n%10;
// //     if(r>max){
// //         max=r;
// //     }
// //     n=Math.floor(n/10);
// // }
// // console.log(max);

// // Sual4

// // let n=prompt();
// // n=Number(n);
// // let i=1;
// // while(i<=n){
// //     console.log(`${i}.hello world`);
// //     i++;
// // }

// // Sual5
// // let n=prompt();
// // n=Number(n);
// // let i=1;
// // let fact=1;
// // while(i<=n){
// //     fact=fact*i;
// //     i++;
// // }
// // alert(fact);

// // Sual6
let num1=prompt("enter num1=");
let num2=prompt("enter num2=");
let s=0;
s=Number(s);
num1=Number(num1);
num2=Number(num2);
while(num2<num1){
    num2=prompt("enter num2=");
    num2=Number(num2);
}
console.log("num1=",num1);
console.log("num2=",num2);
while(num2>=num1){
    s=s+num2;
    num2--;
}
alert(s);
