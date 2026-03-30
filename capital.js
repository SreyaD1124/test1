function capital(string) {
    return string
        .split("")
        .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
        .join("");
}
console.log(capital("sreya"));
