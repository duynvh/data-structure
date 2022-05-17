// Input: arr = [9, 6, 3, 4]
// Output: 6

function findSecondMaximum(arr: number[]): number {
    let max = Number.NEGATIVE_INFINITY;
    let secondMax = Number.NEGATIVE_INFINITY;

    for (const number of arr) {
        if (number > max) {
            max = number;
        }
    }

    for (const number of arr) {
        if (number > secondMax && number < max) {
            secondMax = number
        }
    }

    return secondMax;
}

console.log(findSecondMaximum([-2, -33, -10, -456]));