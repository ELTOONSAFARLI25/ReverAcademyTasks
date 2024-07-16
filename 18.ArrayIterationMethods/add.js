let arr_0=[1,6,3,5,2,7];
let arr1=arr_0.map((elem,index,array) => {
    return elem*elem;
})
console.log(arr1);
let arr_1=[-1,-2,3,-4,5,-6];
let s=0;
let arr_2=arr_1.forEach((elem,index,array)=> {
    if(elem>=0){
        s+=elem;
    }
})
if(s>0){
    console.log(s);

}else{
    console.log("all is negative");
}
console.log(arr_0.sort())
let l=arr_0.length;
let l1=Math.floor(l/2);
// console.log(l1)

if(l%2==0){
    // console.log(l1)
    console.log(arr_0[l1]+arr_0[l1]);
}
else{
    // console.log(l1)
    console.log(arr_0[l1])
}
let cem=0;
let arr_3=arr_0.forEach((elem,index,array)=>{
    cem+=elem;
})
console.log(cem/l);
let cumle="salam menim adim johndur";
console.log(cumle)
const words = cumle.split(' ');
let words1=words.map((elem,index,array)=>{
    if(elem.length>4){
        elem=`${elem[0]}${elem.length-2}${elem[elem.length-1]}`
        return elem;
    }
    else{
        return elem;
    }
})
console.log(words1.join(" "))