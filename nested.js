function Nested(arr) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (Array.isArray(item)) {
            for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
                var val = item_1[_a];
                result.push(val);
            }
        }
        else {
            result.push(item);
        }
    }
    return result;
}
console.log(Nested([24, [24, 100], 57]));
