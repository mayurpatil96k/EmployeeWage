const add = (function (){
    let cnt = 0;
    return function(){cnt++;
        console.log(cnt)
    return cnt;}
})();

add();
add();
add();
add();
