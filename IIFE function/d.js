// ***return all prime numebr in array */
const arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<arr.length; i++){
    if(isPrime(arr[i])){
        console.log(arr[i]);
    }
}
function isPrime(num){
    if(num<2){return false;}
    for(let i=2; i<num-1; i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}