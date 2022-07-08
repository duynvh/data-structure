// Input: [2, 5, 9, 11], target=11
// Output: [0, 2]

function pairWithTargetSum(arr: number[], target: number): number[] {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            return [left, right];
        }

        if (target > currentSum) {
            left++;
        } else {
            right--;
        }
    }

    return [-1, -1];
}

console.log(pairWithTargetSum([2, 5, 9, 11], 11));