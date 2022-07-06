// Input: [10, 6, 4], key = 10
// Output: 0
// Input: [4, 6, 10], key = 10
// Output: 2
function orderAgnosticBinarySearch(arr, value) {
    var start = 0, end = arr.length - 1;
    var isAscending = arr[start] < arr[end];
    while (start <= end) {
        var mid = start + (end - start) / 2;
        if (value == arr[mid]) {
            return mid;
        }
        if (isAscending) {
            if (value < arr[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else {
            if (value > arr[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
    }
    return -1;
}
console.log(orderAgnosticBinarySearch([10, 4, 6], 10));
