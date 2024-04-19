const promise = new Promise((resolve, reject)=>{
    const test1 = "Mayur";
    const test2 = "Mayur";
    if(test1 === test2) {
        resolve("Strings are equal");
    } else {
        reject("Strings are not equal")
    }
}
);

promise.then((message)=>{console.log(message)
})
.catch(err=>console.log(err))
.finally(()=> console.log("done") );