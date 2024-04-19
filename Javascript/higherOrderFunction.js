function higher(lower,x,y){
    return lower(x,y);
}

function add(x,y){
    return x+y;
}

console.log(higher(add,10,20));