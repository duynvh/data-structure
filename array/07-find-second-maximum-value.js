// Input: arr = [9, 6, 3, 4]
// Output: 6
function findSecondMaximum(arr) {
    var max = Number.NEGATIVE_INFINITY;
    var secondMax = Number.NEGATIVE_INFINITY;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var number = arr_1[_i];
        if (number > max) {
            max = number;
        }
    }
    console.log({ max: max });
    for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
        var number = arr_2[_a];
        if (number > secondMax && number < max) {
            secondMax = number;
        }
    }
    return secondMax;
}
console.log(findSecondMaximum([-2, -33, -10, -456]));
