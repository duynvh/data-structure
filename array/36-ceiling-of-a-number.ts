// Input: [4, 6, 10], key = 17
// Output: -1
// Explanation: There is no number greater than or equal to '17' in the given array.

// Input: [4, 6, 10], key = -1
// Output: 0
// Explanation: The smallest number greater than or equal to '-1' is '4' having index '0'.

function searchCeilingOfANumber(arr: number[], key: number): number {
    if (key > arr[arr.length - 1]) return -1;

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + (end - start) / 2));

        if (key < mid) {
            end = mid - 1;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }

    return start;
}

console.log(searchCeilingOfANumber([4, 6, 10], 17));
console.log(searchCeilingOfANumber([4, 6, 10], -1));
console.log(searchCeilingOfANumber([1, 3, 8, 10, 15], 12));