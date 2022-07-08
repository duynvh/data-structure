// Input: [2, 5, 9, 11], target=11
// Output: [0, 2]
function pairWithTargetSum(arr, target) {
    var left = 0, right = arr.length - 1;
    while (left < right) {
        var currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            return [left, right];
        }
        if (target > currentSum) {
            left++;
        }
        else {
            right--;
        }
    }
    return [-1, -1];
}
console.log(pairWithTargetSum([2, 5, 9, 11], 11));
