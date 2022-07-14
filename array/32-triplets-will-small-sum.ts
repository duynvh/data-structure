// Input: [-1, 0, 2, 3], target=3 
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// Input: [-1, 4, 2, 1, 3], target=5 
// Output: 4
// Explanation: There are four triplets whose sum is less than the target: 
//    [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

function tripletsWithSmallSum(arr: number[], target: number): number {
    arr.sort();

    let count: number = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        count += searchTripletsWithSmallSum(arr, target - arr[i], i);
    }

    return count;
}

function searchTripletsWithSmallSum(arr: number[], targetSum: number, first: number) {
    let count = 0;
    let left = first + 1, right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] < targetSum) {
            count += right - left;
            left++;
        } else {
            right--;
        }
    }

    return count;
}

console.log(tripletsWithSmallSum([-1, 0, 2, 3], 3));

console.log(tripletsWithSmallSum([-1, 4, 2, 1, 3], 5));