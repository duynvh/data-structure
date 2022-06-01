// Input: [55, 23, 26, 2, 18, 78, 23, 8, 2, 3]
// Output: [2, 2, 3, 8, 18, 23, 23, 26, 55, 78]

function quickSort(arr: number[]): number[] {
    quickSortRec(arr, 0, arr.length - 1);
    return arr;
}

function quickSortRec(arr: number[], low: number, high: number) {
    if (high > low) {
        let pivot = partition(arr, low, high);

        quickSortRec(arr, low, pivot - 1);

        quickSortRec(arr, pivot + 1, high);
    }

    return arr;
}

function partition(arr: number[], low: number, high: number) {
    let pivotValue = arr[low];
    let i = low;
    let j = high;

    while(i < j) {
        while (i <= high && arr[i] <= pivotValue) {
            i++;
        }

        while (arr[j] > pivotValue) {
            j--;
        }

        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    arr[low] = arr[j];
    arr[j] = pivotValue;

    return j;
}

console.log(quickSort([55, 23, 26, 2, 18, 78, 23, 8, 2, 3]));