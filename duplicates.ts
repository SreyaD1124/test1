function duplicates(arr:number[]):number[]{
    let result:number[]=[];
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(duplicates([22,44,55,0,9,22,44,9]));
console.log(duplicates([1,3,5,6,8]));