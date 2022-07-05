// Input: [1, 5, 3, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3] 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findSubsetsWithDuplicate(arr) {
    arr.sort();
    var subsets = [];
    var startIndex = 0, endIndex = 0;
    subsets.push([]);
    for (var i = 0; i < arr.length; i++) {
        startIndex = 0;
        if (i > 0 && arr[i] == arr[i - 1]) {
            startIndex = endIndex + 1;
        }
        var size = subsets.length;
        endIndex = size - 1;
        for (var j = startIndex; j <= endIndex; j++) {
            var set = __spreadArray([], subsets[j], true);
            set.push(arr[i]);
            subsets.push(set);
        }
    }
    return subsets;
}
console.log(findSubsetsWithDuplicate([1, 5, 3, 3]));
