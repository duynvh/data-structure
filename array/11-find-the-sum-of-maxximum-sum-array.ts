// Input: [1, 7, -2, -5, 10, -1]
// Output: 11

function findMaxSumSubArray(arr: number[]): number {
    if (arr.length < 1) return 0;
    
    let currMax = arr[0];
    let globalMax = arr[0];
    let length = arr.length;

    for (let i = 1; i < length; i++) {
        if (currMax < 0) {
            currMax = arr[i];
        } else {
            currMax += arr[i];
        }

        if (globalMax < currMax) {
            globalMax = currMax;
        }
    }
    
    return globalMax;
}

console.log(findMaxSumSubArray([1, 7, -2, -5, 10, -1]));