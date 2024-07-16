// 1.
// let n=prompt("enter the number :");
// let c=0;
// while(n>0){
//     n=Math.floor(n/10);
//     c++;
// }
// console.log(c)

// 2.
// let str=prompt("enter the string :");
// let c=0;
// for(let i=0 ; i<str.length; i++){
//     if(str[i]==","){
//         c++;
//     }
// }
// let countWord=c+1;
// console.log(countWord);

// 3.
// let num=prompt("enter number :");
// let pow=prompt("enter pow");
// let i=0;
// let p=1;
// while(i<pow){
//     p=p*num;
//     i++;
// }
// console.log(num,"^",pow,"=",p)

// 4. easy
// let arr=[1,2,5,7,2,5,1];
// let cem=0;
// for(let i=0;i<arr.length ; i++){
//     cem=cem+arr[i];
// }
// let edediOrta=cem/arr.length;
// console.log("ededi orta :",edediOrta);

// 4.
// let n=prompt("enter count of numbers :");
// let i=0;
// let arr=[];
// let sum=0;
// while(i<n){
//     arr[i]=prompt("enter number");
//     arr[i]=Number(arr[i]);
//     sum=sum+arr[i]
//     i++;
// }console.log(arr);
// console.log(sum/arr.length)

// 5.
// let n=prompt("enter count of numbers :");
// let i=0;
// let arr=[];
// while(i<n){
//     arr[i]=prompt("enter number:");
//     i++;
// }
// console.log(arr);
// let max=arr[0];
// for(let i=0 ; i< arr.length ;i++){
//     if(arr[i]>=max){
//         max=arr[i];
//     }
// }
// console.log(max);

// 6.
// let arr=[2,5,7,8,4,21];
// for(let i=0; i<arr.length;i++){
//     let j=1;
//     let c=0;
//     while(j<=arr[i]){
//         if(arr[i]%j==0){
//             c++;
//         }
//         j++;
//     }
//     if(c==2){
//         console.log(arr[i]);
//     }
// }

// 7.
// let n=prompt("enter number:");
// let arr=[];
// let i=0;
// while(n>0){
//     arr[i]=n%10;
//     n=Math.floor(n/10);
//     i++;
// }
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }

// 8.
// let n=prompt("enter number:");
// console.log(n);
// let cem=0;
// let hasil=1;
// let k=0;
// while(n>0){
//     let r;
//     r=n%10;
//     cem=cem+r;
//     hasil=hasil*r;
//     k++;
//     n=Math.floor(n/10);
    
// }
// console.log("cem:" ,cem);
// console.log("hasil:" ,hasil);
// console.log("ededi orta:" ,cem/k);

// 9. & 10.
// let n=prompt();
// let i=1;
// let k=0;
// while(i<=n){
//     if(n%i==0){
//         console.log(i);
//             k++;
//     }
//     i++;
// }
// console.log(k);

// 11.
// let n=prompt("enter count of numbers :");
// let i=0;
// let arr=[];
// while(i<n){
//     arr[i]=prompt("enter number:");
//     if(arr[i]%2!=0){
//         console.log(i);
//     }
//     i++;
// }
// console.log(arr);

// 12.
// let n=prompt("enter count of numbers :");
// let i=0;
// let arr=[];
// while(i<n){
//     arr[i]=prompt("enter number:");
//     if(i%2!=0){
//         console.log(arr[i]);
//     }
//     i++;
// }
// console.log(arr);

// 13.
let n=prompt("enter count of numbers :");
let i=0;
let max=0;
let arr=[];
while(i<n){
    arr[i]=prompt("enter number:");
    if(arr[i]%2==0 && arr[i]>=max){
        max=arr[i];
    }
    i++;
}
console.log(max);