// Input: [1, 7, -2, -5, 10, -1]
// Output: 11
function findMaxSumSubArray(arr) {
    if (arr.length < 1)
        return 0;
    var currMax = arr[0];
    var globalMax = arr[0];
    var length = arr.length;
    for (var i = 1; i < length; i++) {
        if (currMax < 0) {
            currMax = arr[i];
        }
        else {
            currMax += arr[i];
        }
        if (globalMax < currMax) {
            globalMax = currMax;
        }
    }
    return globalMax;
}
console.log(findMaxSumSubArray([1, 7, -2, -5, 10, -1]));
