// Input: [4, 6, 10], key = 7
// Output: 6
// Explanation: The difference between the key '7' and '6' is minimum than any other number in the array 

// Input: [1, 3, 8, 10, 15], key = 12
// Output: 10

// Input: [4, 6, 10], key = 17
// Output: 10

function searchMinDiffElement(arr: number[], key: number): number {
    if (key < arr[0]) return arr[0];
    if (key > arr[arr.length - 1]) return arr[arr.length - 1];

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (key < arr[mid]) {
            end = mid - 1;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else {
            return arr[mid];
        }
    }

    if ((arr[start] - key) < (key - arr[end])) return arr[start];
    return arr[end];
}

console.log(searchMinDiffElement([4, 6, 10], 7));
console.log(searchMinDiffElement([4, 6, 10], 4));

console.log(searchMinDiffElement([4, 6, 10], 17));

console.log(searchMinDiffElement([1, 3, 8, 10, 15], 12));