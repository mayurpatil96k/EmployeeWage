function addition(x,y,z){
    return x+y+z;
}
function curryAdd(x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    }
}

console.log(addition(10,20,30));
const curry1=curryAdd(10)(20);
console.log(curry1(20));