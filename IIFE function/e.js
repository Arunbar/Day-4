// Return all the palindromes in an array
let arr=["oppo","hello","wow","world"];
for(let i=0; i<arr.length; i++){
    if(arr[i]==isPor(arr[i])){
        console.log(arr[i]);
    }
}
function isPor(name){
    let full="";
    for(let i=name.length-1; i>=0; i--){
        full=full+name[i];
    }
    return full;
}
