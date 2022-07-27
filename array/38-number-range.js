// Input: [4, 6, 6, 6, 9], key = 6
// Output: [1, 3]
// Input: [1, 3, 8, 10, 15], key = 10
// Output: [3, 3]
// Input: [1, 3, 8, 10, 15], key = 12
// Output: [-1, -1]
function findRange(arr, key) {
    var result = [-1, -1];
    result[0] = searchNumber(arr, key, false);
    if (result[0] != -1) {
        result[1] = searchNumber(arr, key, true);
    }
    return result;
}
function searchNumber(arr, key, findMaxIndex) {
    var keyIndex = -1;
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        var mid = Math.floor(start + (end - start) / 2);
        if (key < arr[mid]) {
            end = mid - 1;
        }
        else if (key > arr[mid]) {
            start = mid + 1;
        }
        else {
            keyIndex = mid;
            if (findMaxIndex) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return keyIndex;
}
console.log(findRange([4, 6, 6, 6, 9], 6));
console.log(findRange([1, 3, 8, 10, 15], 10));
console.log(findRange([1, 3, 8, 10, 15], 12));
