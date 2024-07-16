// TAASK1

// let a=prompt("Enter Fisrt number:");
// a=Number(a);
// let b=prompt("Enter Second Number");
// b=Number(b);
// let c=prompt("Enter Third Number:");
// c=Number(c);
// if(a+b>c && a+c>b && c+b>a){
//     console.log("These numbers are sides of triangle");
// }
// else{
//     console.log("These numbers are not sides of triangle");
// }

// TASK2

// let a=prompt("Enter Fisrt number:");
// a=Number(a);
// let b=prompt("Enter Second Number");
// b=Number(b);
// let c=prompt("Enter Third Number:");
// c=Number(c);
// let p=a*b*c;
// if(p>=0){
//     console.log("product is positive");
// }
// else{
//     console.log("product is negative");

// }

// TASK3

// let i=0;
// while(i<=15){
//     if(i==0){
//         console.log(`${i} is neither even nor odd number`)
//     }
//     else if(i%2==0){
//         console.log(`${i} is even number`)
//     }
//     else{
//         console.log(`${i} is odd number`)

//     }
//     i++;
// }

// // TASK4

// let scores=[["ELmira",70],["Gulay",80],["Qezenfer",60],["Elton",95],["Cavid",77],["Samir",88],["Zeyneb",86]
// ];
// // console.log(scores)
// let sum=0;
// let count=scores.length
// for (elem1 in scores){
//     sum+=scores[elem1][1]
// }
// let k=sum/count;
// console.log(k)
// if(k>90){
//     console.log("A");
//     const p=document.createElement("p");
//     p.innerText=`${k} score => A`
//     document.body.appendChild(p);
// }
// else if(k>80){
//     console.log("B");
//     const p=document.createElement("p");
//     p.innerText=`${k} score => B`
//     document.body.appendChild(p);
// }
// else if(k>70){
//     console.log("C");
//     const p=document.createElement("p");
//     p.innerText=`${k} score => C`
//     document.body.appendChild(p);
// }
// else if(k>60){
//     console.log("D");
//     const p=document.createElement("p");
//     p.innerText=`${k} score => D`
//     document.body.appendChild(p);
// }
// else if(k>50){
//     console.log("E");
//     const p=document.createElement("p");
//     p.innerText=`${k} score => E`
//     document.body.appendChild(p);
// }
// else{
//     console.log("F");
//     const p=document.createElement("p");
//     p.innerText=`${k} score => F`
//     document.body.appendChild(p);
// }

// TASK5
// function armstrong(){
//     let i=100;
//     while(i<1000){
//         let sum=0;
//         let m=i;
//         while(i>0){
//             let r=i%10;
//             sum+=Math.pow(r,3);
//             i=Math.floor(i/10);
//         }
//         i=m;
//         if(sum==i){
//             console.log(i);
//         }
//         i++;
//     }
    
// }
// armstrong();

// TASK6

// class Restangle{
//     constructor(widht,height){
//         this.widht=widht;
//         this.height=height;
//     }
//     perimetr(){
//         return 2*(this.widht+this.height);
//     }
//     area(){
//         return this.widht*this.height;

//     }
// }
// let restangle=new Restangle(10,20);

// restangle.area();
// restangle.perimetr();


// const p1=document.createElement("p");
// p1.innerText=`${restangle.perimetr()}`;
// document.body.appendChild(p1);

// const p2=document.createElement("p");
// p2.innerText=`${restangle.area()}`;
// document.body.appendChild(p2);
// let perimetr=restangle.perimetr();
// document.body.innerHTML=`<p> ${perimetr} </p>`;

// TASK7

// let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// for(elem1 in a){
//     let p=a[elem1];
//     elem1=Number(elem1);

//     // console.log();
//     const h=document.createElement("h3");
//     h.innerText=`${elem1+1} row`;
//     document.body.appendChild(h);

//     for(elem2 in p){
//         // console.log(p[elem2]);
//         const t=document.createElement("p");
//         t.innerText=p[elem2];
//         document.body.appendChild(t);
//     }
// }

// TASK8

// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join('+'))

// TASK9
// let a=[1,2,3,4,5,6,7,8,9,10];
// let sum=a.reduce((sum,number)=> sum+number,0);
// console.log(sum/a.length);

// TASK10

// let a=[1,2,3,4,5];
// console.log(a.reverse());

// TASK11
// let words = ["hello", "world", "javascript", "array"];
// let words2=[];
// words.forEach((elem)=>{
//     words2.push(elem.split('').reverse().join(''));
// })
// console.log(words2)

// TASK12
// let arr=[34, 7, 23, 32, 5, 62];

// console.log(arr.sort((a,b)=> {return b-a}))
// console.log(arr.sort((a,b)=> {return a-b}))

// TASK13

// let sentence = "javascript dilində proqramlaşdirma öyrənirəm.";
// let words=sentence.split(" ");
// const result=[];
// words.forEach((elem)=>{
//     result.push(`${elem[0].toUpperCase()}${elem.slice(1)}`);
// })
// console.log(result.join(' '))

// TASK14

// string = "javascript dilində proqramlaşdırma öyrənirəm.";
// let saitler=["a","ı","o","u","e","ə","i","ö","ü"];
// let words=string.split(" ")
// let sum=0;
// words.forEach((soz) => {
//     for(herf in soz){
//         for(elem in saitler){
//             if(soz[herf]==saitler[elem]){
//                 sum++;
//                 console.log(soz[herf]);
//             }
//         }
//     }
    
// });
// console.log(sum)

// TASK15

// sentence = "javascript dilində proqramlaşdırma öyrənirəm";
// let words=sentence.split(" ");
// const result=[];
// words.forEach((elem) => {
//     result.push(`${elem[0].toUpperCase()}${elem.slice(1,elem.length-1)}${elem[elem.length-1].toUpperCase()}`)    
// });
// console.log(result.join(" "))

// TASK16

// function factorial(n){
//     let i=1;
//     let p=1;
//     while(i<=n){
//         p=p*i;
//         i++;
//     }
//     return p;
// }
// let n=prompt("Enter your number:");
// console.log(factorial(n))


// TASK17

let string=prompt("enter your sentence...");
string=string.trim()
console.log(string);
let k=0;
for(elem in string){
    elem=Number(elem);
    if(string[elem]==" " && string[elem+1]!=" "){
        k++;
    }
}
console.log(k+1)    

// TASK18

// let arr=prompt();
// arr=arr.split(" ");
// console.log(arr);
// let i=prompt("enter element number");
// i=Number(i);
// let deleted=arr[i-1];
// let arr2=[];
// arr.forEach((elem) => {
//     if(elem!=deleted){
//         arr2.push(elem);
//     }
    
// });
// console.log(arr2)
