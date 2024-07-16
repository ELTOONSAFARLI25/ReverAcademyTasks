async function asyncFunc(){
    const data= await(await fetch("https://restcountries.com/v3.1/all?fields=name,flags")).json()
    data.forEach((elem)=>{
        console.log(elem)
    })
}
asyncFunc()