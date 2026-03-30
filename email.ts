function validEmail(email:string):boolean{
    let at=email.indexOf("@");
    let dot=email.indexOf(".",at);
    if(at>0&&dot>at&&dot<email.length-1){
        return true;
    }
    return false;
}
console.log(validEmail("sreyadevarapalli@gamil.com"));
console.log(validEmail("123456gmailcom"));
console.log(validEmail("4565348@gmailcom"));