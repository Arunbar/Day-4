// Rotate an array by k times

function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
let k = 2;
let rotatedArray = rotateArray(arr, k);
console.log(rotatedArray);