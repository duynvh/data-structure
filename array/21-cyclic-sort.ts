// Input: [2, 6, 4, 3, 1, 5],
// Output: [1, 2, 3, 4, 5, 6]

function cyclicSort(arr: number[]): number[] {
    let i = 0;
    while (i < arr.length) {
        let j = arr[i] - 1;
        if (arr[i] !== arr[j]) {
            swap(arr, i, j);
        } else {
            i++;
        }
    }

    return arr;
}

function swap(arr: number[], i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(cyclicSort([2, 6, 4, 3, 1, 5]))