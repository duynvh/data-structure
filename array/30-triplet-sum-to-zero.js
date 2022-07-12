// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
function searchTriplets(arr) {
    arr.sort();
    var triplets = [];
    for (var i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1])
            continue;
        searchPair(arr, -arr[i], i + 1, triplets);
    }
    return triplets;
}
function searchPair(arr, targetSum, left, triplets) {
    var right = arr.length - 1;
    while (left < right) {
        var currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
            triplets.push([-targetSum, arr[left], arr[right]]);
            left++;
            right--;
            while (left < right && arr[left] == arr[left - 1]) {
                left++;
            }
            while (left < right && arr[right] == arr[right + 1]) {
                right--;
            }
        }
        else if (targetSum > currentSum) {
            left++;
        }
        else {
            right--;
        }
    }
}
console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
