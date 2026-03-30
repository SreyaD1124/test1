function firstUnique(string1:string):string{
    for(let i=0;i<string1.length;i++){
        let char = string1[i];
        if(string1.indexOf(char)===string1.lastIndexOf(char)){
            return char;
        }
    }
    return "";
}
console.log(firstUnique("ccbbbddbdbdbbvfgn"));
