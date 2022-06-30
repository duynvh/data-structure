// Input: [2, 1, 5, 2, 3, 2], S=7 
// Output: 2

function findMinLengthSubArray(arr: number[], s: number): number {
    let windowSum = 0;
    let minLength = Number.POSITIVE_INFINITY;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        while(windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }

    return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
}

console.log(findMinLengthSubArray([3, 4, 1, 1, 6], 8));