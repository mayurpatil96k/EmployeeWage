function reverseArray(arr,start,end) 
{ 
    while (start < end) 
    { 
        var temp = arr[start]; 
        arr[start] = arr[end]; 
        arr[end] = temp; 
        start++; 
        end--; 
    } 
    console.log(arr)
} 


const arr2=[1,2,3,4]
reverseArray(arr2,0,3);