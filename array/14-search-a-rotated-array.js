// Input: [6, 7, 1, 2, 3, 4, 5]. Target 3
// Output: 4
function binarySearchRotated(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    if (start > end)
        return -1;
    while (start <= end) {
        var mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === target)
            return mid;
        if (arr[start] <= arr[mid]) {
            if (arr[start] <= target && target < arr[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else {
            if (arr[mid] < target && target <= arr[end]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
console.log(binarySearchRotated([4, 5, 6, 1, 2, 3], 6));
