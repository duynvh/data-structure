// Input: [12, 1, 3, 9, 2] Target: 9
// Output: 3

function binarySearchSortedArray(arr: number[], target: number): number {
    let low: number = 0;
    let high: number = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + ((high - low) / 2));
        if (arr[mid] === target) {
            return mid;
        } else if (target < arr[mid]) {
            high = mid - 1;
        } else if (target > arr[mid]) {
            low = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearchSortedArray([12, 1, 3, 9, 2], 9));