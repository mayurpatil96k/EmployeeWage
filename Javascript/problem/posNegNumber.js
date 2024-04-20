// WAP to get sum of positive and negetive numbers seperatly from an array.
function posNewAdd(arr) { 
    let posSum = 0;
    let nevSum = 0;
    for (let i=0;i<arr.length;i++) {
        if(arr[i]>0){
            posSum += arr[i];
        } else {
            nevSum += arr[i];
        }
    }
    console.log(posSum,nevSum);
}

const arr2 = [2,50,1,5,1,-1,-5,-5,-5,-4]
posNewAdd(arr2);