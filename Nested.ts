function Nested(arr:any[]):number[]{
    let result:number[]=[];
        if(Array.isArray(item)){
                result.push(val);
            }
        }else{
            result.push(item);
        }
    return result;
}
console.log(Nested([24,[24,[45,67,89,100],100],57]));
console.log(Nested([23,45,67,56,46,38,[56],67,[76,56]]));