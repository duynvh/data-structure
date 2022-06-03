// Input: [2, 1, 5, 1, 3, 2] k = 3
// Output: 9
function maxSumSubarray(arr, k) {
    var windowSum = 0, maxSum = 0, windowStart = 0;
    for (var i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return maxSum;
}
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));
