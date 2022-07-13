// Input: [-2, 0, 1, 2], target=2
// Output: 1
// Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// Input: [-3, -1, 1, 2], target=1
// Output: 0
// Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

// Input: [1, 0, 1, 1], target=100
// Output: 3
// Explanation: The triplet [1, 1, 1] has the closest sum to the target.

function tripletsSumCloseToTarget(arr: number[], targetSum: number): number {
    if (!arr && arr.length < 3) {
        throw new Error("InvalidArgumentExcpetion");
    }

    let smallestDifference = Number.POSITIVE_INFINITY;
    arr.sort();
    
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1, right = arr.length - 1;

        while (left < right) {
            let targetDiff = targetSum - arr[i] - arr[left] - arr[right];
            if (targetDiff === 0) return targetSum;
            if (Math.abs(targetDiff) < Math.abs(smallestDifference) ||
                (Math.abs(targetDiff) == Math.abs(smallestDifference) && targetDiff > smallestDifference)
            ) {
                smallestDifference = targetDiff;
            }

            if (targetDiff > 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return targetSum - smallestDifference;
}

// console.log(tripletsSumCloseToTarget([-2, 0, 1, 2], 2));
// console.log(tripletsSumCloseToTarget([-3, -1, 1, 2], 1));
console.log(tripletsSumCloseToTarget([1, 0, 1, 1], 100));