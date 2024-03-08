// convert cap in array
const arr = ["hello", "thiS", "taSk4","arrow"];
    const cap = name => name[0].toUpperCase() + name.slice(1).toLowerCase();
    for(let i = 0; i < arr.length; i++){
        arr[i] = cap(arr[i]);
    }
console.log(arr);