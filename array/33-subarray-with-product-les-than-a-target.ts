// Input: [2, 5, 3, 10], target=30 
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose product is less than the target.

// Input: [8, 2, 6, 5], target=50 
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
// Explanation: There are seven contiguous subarrays whose product is less than the target.

function subarrayProductLessThanK(arr: number[], target: number): number[][] {
    const result: number[][] = [];
    let product = 1;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        product *= arr[right];
        while (product >= target && left < arr.length) {
            product /= arr[left++];
        }

        const tempList = [];
        for (let i = right; i >= left; i--) {
            tempList.unshift(arr[i]);
            result.push([...tempList]);
        }
    }
    return result;
}

console.log(subarrayProductLessThanK([8, 2, 6, 5], 50));
console.log(subarrayProductLessThanK([2, 5, 3, 10], 30));