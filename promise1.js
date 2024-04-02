const myFunctionPromise = (param) => {
    return new Promise( (resolve, reject) => {
        if(param === 2){
            setTimeout(function () { 
                resolve(param*2);
            }, 2000);
        } else{
            setTimeout(function () {
                reject("Maaf tidak ada nilai dalam parameter")
            }, 2000);
        }
   })
}

myFunctionPromise(2)
    .then ((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })