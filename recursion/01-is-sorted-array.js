// Input: arr = [1, 2, 3, 4, 5]
// Output: true
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Input: arr = [1, 2, 4, 3, 5]
// Output: false
function isSortedArray(arr, length) {
    if (length === 0 || length === 1)
        return true;
    if (arr[0] > arr[1])
        return false;
    var copyArr = __spreadArray([], arr, true);
    var firstElement = copyArr.shift();
    return isSortedArray(copyArr, length - 1);
}
console.log(isSortedArray([1, 2, 3, 4, 5], 5));
console.log(isSortedArray([1, 2, 4, 3, 5], 5));
