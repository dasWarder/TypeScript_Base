var numArray = [1, 1, 2, 3, 5, 8];
var alertArray = ['success', 'warn', 'danger', 'info'];
var reverse = function (array) {
    return array.reverse();
};
var first = ['h', 'e', 'l', 'l', 'o'];
var second = [1, 2, 3, 4, 5];
var third = ['success', 'warn', 'danger'];
var firstReversed = reverse(first);
var secondReversed = reverse(second);
var thirdReversed = reverse(third);
console.log("First before: ".concat(first, ", \nafter: ").concat(firstReversed));
console.log("Second before: ".concat(second, ", \nafter: ").concat(secondReversed));
console.log("Third before: ".concat(third, ", \nafter: ").concat(thirdReversed));
