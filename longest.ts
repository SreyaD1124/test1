function longest(Sentence:string):string{
    let words=Sentence.split(" ");
    let longest="";
    for(let word of words){
        if(word.length>longest.length){
            longest=word;
        }
    }
    return longest;
}

console.log(longest("Guidewire  functionality annd AUtomation Testing"));