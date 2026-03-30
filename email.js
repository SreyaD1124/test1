function validEmail(email) {
    var at = email.indexOf("@");
    var dot = email.indexOf(".", at);
    if (at > 0 && dot > at && dot < email.length - 1) {
        return true;
    }
    return false;
}
console.log(validEmail("sreyadevarapalli@gamil.com"));
