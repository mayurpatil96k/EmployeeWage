function occurence(arr,value){
    let cnt = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===value){
            cnt ++;
        }
    }
    return cnt;
}


const arrTest = [1,1,1,1,1,1,1,1,1,1,1,1,3,5,6];
console.log(occurence(arrTest,3));