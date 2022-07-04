// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findSubsets(arr) {
    var subsets = [];
    subsets.push([]);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var currentNumber = arr_1[_i];
        var size = subsets.length;
        for (var i = 0; i < size; i++) {
            var set = __spreadArray([], subsets[i], true);
            set.push(currentNumber);
            subsets.push(set);
        }
    }
    return subsets;
}
console.log(findSubsets([1, 5, 3]));
