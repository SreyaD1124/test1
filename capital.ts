function capital(string:string):string{
    return string
    .split("")
    .map(word=>
        word.charAt(0).toUpperCase()+word.slice(1))
    .join("");
}
console.log(capital("sreya"));