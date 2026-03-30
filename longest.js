function longest(Sentence) {
    var words = Sentence.split(" ");
    var longest = "";
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longest("Guidewire  functionality annd AUtomation Testing"));
