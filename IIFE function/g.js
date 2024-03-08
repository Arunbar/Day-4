// remove the duplicates from an array

let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = (function(arr) {
    return arr.filter(function(value, index) {
        return arr.indexOf(value) === index;
    });
})(arr);

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
