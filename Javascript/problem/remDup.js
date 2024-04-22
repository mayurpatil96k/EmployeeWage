function remDup(arr){
    const arr2=[];
    for(let i=0;i<arr.length;i++){
        if(!arr2.includes(arr[i])){
            arr2.push(arr[i])
            console.log("unique element "+arr[i])
        }else{
            console.log("duplicat element found "+arr[i])
        }
    }
    return arr2;
}

const testArr=[1,1,1,2,5,5,5,545646,46,654,684,66,5];
console.log(remDup(testArr));
