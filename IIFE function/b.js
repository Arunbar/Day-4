// Convert all the strings to title caps in a string array
function coverCap(strArray) {
    return strArray.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}
let stringArray = ["hello world", "good morning", "this is task4"];
let titleCapsArray = coverCap(stringArray);
console.log(titleCapsArray);