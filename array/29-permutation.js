// Input: [1,3,5]
// Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function permutation(arr) {
    var result = [];
    var permutations = [];
    permutations.push([]);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var currentNumber = arr_1[_i];
        var size = permutations.length;
        for (var i = 0; i < size; i++) {
            var oldPermutations = permutations.shift();
            for (var j = 0; j <= oldPermutations.length; j++) {
                var newPermutation = __spreadArray([], oldPermutations, true);
                newPermutation.splice(j, 0, currentNumber);
                if (newPermutation.length == arr.length) {
                    result.push(newPermutation);
                }
                else {
                    permutations.push(newPermutation);
                }
            }
        }
    }
    return result;
}
console.log(permutation([1, 3, 5]));
