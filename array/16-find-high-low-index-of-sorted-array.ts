// Input: [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6]
// Output: 
// Low Index of 5: 15
// High Index of 5: 17

function findLowIndex(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);
    
    while (low <= high) {
        let midElement = arr[mid];

        if (midElement < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

        mid = Math.floor(low + (high - low) / 2);
    }

    if (low < arr.length && arr[low] === target) return low;

    return -1;
}

function findHighIndex(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);
    
    while (low <= high) {
        let midElement = arr[mid];

        if (midElement <= target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

        mid = Math.floor(low + (high - low) / 2);
    }

    if (high === -1) return high;

    if (high < arr.length && arr[high] === target) return high;

    return -1;
}

const numbers = [
    1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6
];

console.log(findLowIndex(numbers, 5));
console.log(findHighIndex(numbers, 5));