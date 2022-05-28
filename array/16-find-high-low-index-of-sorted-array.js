// Input: [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6]
// Output: 
// Low Index of 5: 15
// High Index of 5: 17
function findLowIndex(arr, target) {
    var low = 0;
    var high = arr.length - 1;
    var mid = Math.floor(high / 2);
    while (low <= high) {
        var midElement = arr[mid];
        if (midElement < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
        mid = Math.floor(low + (high - low) / 2);
    }
    if (low < arr.length && arr[low] === target)
        return low;
    return -1;
}
function findHighIndex(arr, target) {
    var low = 0;
    var high = arr.length - 1;
    var mid = Math.floor(high / 2);
    while (low <= high) {
        var midElement = arr[mid];
        if (midElement <= target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
        mid = Math.floor(low + (high - low) / 2);
    }
    console.log({ low: low, high: high });
    if (high === -1)
        return high;
    if (high < arr.length && arr[high] === target)
        return high;
    return -1;
}
var numbers = [
    1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6
];
console.log(findLowIndex(numbers, 5));
console.log(findHighIndex(numbers, 5));
