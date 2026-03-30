function Nested(arr:any[]):number[]{
    let result:number[]=[];
    for(let item of arr){
        if(Array.isArray(item)){
            for(let val of item){
                result.push(val);
            }
        }else{
            result.push(item);
        }
    }
    return result;
}
console.log(Nested([24,[24,100],57]));