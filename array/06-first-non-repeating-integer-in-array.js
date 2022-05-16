// Input: arr = [9,2,3,2,6,6]
// Output: 9
function checkFirstUnique(arr) {
    var frequency = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
    }
    for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
        var num = arr_2[_a];
        if (frequency[num] == 1)
            return num;
    }
    return -1;
}
console.log(checkFirstUnique([9, 2, 3, 2, 6, 6]));
