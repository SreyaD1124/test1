function firstUnique(string1) {
    for (var i = 0; i < string1.length; i++) {
        var char = string1[i];
        if (string1.indexOf(char) === string1.lastIndexOf(char)) {
            return char;
        }
    }
    return "";
}
console.log(firstUnique("ccbbbddbdbdbbvfgn"));
