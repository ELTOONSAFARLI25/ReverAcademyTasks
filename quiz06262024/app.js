
// let str="hello world";
// let arr=str.split('');
// let k=0;
// console.log(arr);
// let arr2=[];
// arr.forEach((elem)=>{
//     for(let i=0;i<arr.length;i++){
//         if(elem==arr[i]){
//             k++;
//         }
//     }
//     if(!arr2.includes(elem)){
//         arr2.push(elem)
//         arr2.push(`:${k}`)

//     }
//     k=0;


// })
// console.log(arr2.join(' '))


// let arr3=[1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 1];
// let k=0;
// let res=[];
// arr3.forEach((elem)=>{
//     for(let i=0;i<arr3.length;i++){
//         if(elem==arr3[i]){
//             k++;
//         }
//     }  
//     if(k>=2 && !res.includes(elem) ){
    
//         res.push(elem)
//     }
//     k=0;
// })
// console.log(res)

// let arr4=[1, 2, 2, 3, 4, 4, 5];
// let s=0;
// let result=[];
// arr4.forEach((elem)=>{
//     // for(let i=0;i<arr4.length;i++){
//     //     if(elem==arr4[i]){
//     //         s++;
//     //     }
//     // }
//     if(!result.includes(elem)){
//         result.push(elem);
//     }
//     s=0
// })
// console.log(result)

// let a=[0,1];
// let n=prompt("enter count of numbers:");
// for(let i=1;i<n-1;i++){
//     a.push(a[i]+a[i-1])
// }
// console.log(a)

let str1=prompt("enter string:");
let arr1=str1.split('')
console.log(`"${str1}" original string`)
let arr2=[];
for(let i=arr1.length-1;i>=0;i--){
    arr2.push(arr1[i])
}
let str2=arr2.join('')
console.log(`"${str2}" reverse string`)

if(str2==str1){
    console.log("YES!this string is polindrom")
}
else{
    console.log("NO!this string is not polindrom")

}