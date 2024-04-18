//non Blocking
console.log("Non Blocking...");
setTimeout(() => {
    console.log("inside interval")
}, 2000);
console.log("after Non blocking")

//Blocking
console.log("Now in blocking...")
function  waiting(time){
    const start=Date.now();
    while(Date.now()-start<time){}
}
waiting(5000);
console.log("after non blocking...")