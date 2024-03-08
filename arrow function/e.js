// return all the palindromes in Array

const arr=["oppo","hello","wow","world"];
const isPom=name=>{
    let res="";
    for(let i=name.length-1; i>=0; i--){
        res=res+name[i];
    }
    return res;
}
arr.forEach(item=>{
    if(item==isPom(item)){
        console.log(item);

    }
});