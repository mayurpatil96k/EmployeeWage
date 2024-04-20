function reverseArrayElements(arr) {
    let reversedArr = [];
    for (let item of arr) {
        reversedArr.push(item.split('').reverse().join(''));
    }
    return reversedArr;
}

let myArray = ["hello", "world", "javascript"];
let reversedArray = reverseArrayElements(myArray);
console.log(reversedArray);
