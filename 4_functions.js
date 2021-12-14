var add = function (a, b) {
    return a + b;
};
function concatStrings(strings) {
    var result = '';
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var element = strings_1[_i];
        result += element + ' ';
    }
    return result.trim();
}
var result = concatStrings(['1, 2, 3, 4, 5, 6']);
console.log("Concatenated string: ".concat(result));
;
var position = function (a, b) {
    if (!a && !b) {
        var myPosition = {
            x: undefined,
            y: undefined,
            toString: function () {
                return "X and Y undefined";
            }
        };
        return myPosition.toString();
    }
    if (a && !b) {
        var defaultPosition = {
            x: a,
            y: undefined,
            "default": a.toString()
        };
        return defaultPosition["default"];
    }
    var position = {
        x: a,
        y: b,
        toString: function () {
            return "X: ".concat(this.x, ", Y: ").concat(this.y);
        }
    };
    return position.toString();
};
console.log("Empty: ".concat(position()));
console.log("A defined: ".concat(position(4)));
console.log("A and B are defined: ".concat(position(4, 5)));
