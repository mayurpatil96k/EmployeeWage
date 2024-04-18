function greet(callback){
    console.log("hello there...")
    callback();
}

function wcm(){
    console.log("good afternoon...")
}

greet(wcm);