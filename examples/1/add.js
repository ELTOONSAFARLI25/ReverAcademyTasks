let arr=[1,2,3,4,5,6,7,8,9,10]
function getProduct(arr){
    let p=1;
    for(elem of arr){
        p=p*elem;
    }
    return p;
}

let cut = (arr) => {
    let c=[];
    for(elem of arr){
        if(elem%2==0){
            c.push(elem)
        }
        
    }
    return c;
}

let func= function (arr){
    let s=0;
    for(elem in arr){
        s=s+arr[elem];
    }
    return s;
}
console.log(getProduct(arr));
console.log(cut(arr));
console.log(func(arr));

