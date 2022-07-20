// Input: [2, 5, 3, 10], target=30 
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose product is less than the target.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Input: [8, 2, 6, 5], target=50 
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
// Explanation: There are seven contiguous subarrays whose product is less than the target.
function subarrayProductLessThanK(arr, target) {
    var result = [];
    var product = 1;
    var left = 0;
    for (var right = 0; right < arr.length; right++) {
        product *= arr[right];
        while (product >= target && left < arr.length) {
            product /= arr[left++];
        }
        var tempList = [];
        for (var i = right; i >= left; i--) {
            tempList.unshift(arr[i]);
            console.log({ tempList: tempList });
            result.push(__spreadArray([], tempList, true));
        }
    }
    return result;
}
console.log(subarrayProductLessThanK([8, 2, 6, 5], 50));
console.log(subarrayProductLessThanK([2, 5, 3, 10], 30));
