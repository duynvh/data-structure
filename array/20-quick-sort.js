// Input: [55, 23, 26, 2, 18, 78, 23, 8, 2, 3]
// Output: [2, 2, 3, 8, 18, 23, 23, 26, 55, 78]
function quickSort(arr) {
    quickSortRec(arr, 0, arr.length - 1);
    return arr;
}
function quickSortRec(arr, low, high) {
    if (high > low) {
        var pivot = partition(arr, low, high);
        quickSortRec(arr, low, pivot - 1);
        quickSortRec(arr, pivot + 1, high);
    }
    return arr;
}
function partition(arr, low, high) {
    var pivotValue = arr[low];
    var i = low;
    var j = high;
    while (i < j) {
        while (i <= high && arr[i] <= pivotValue) {
            i++;
        }
        while (arr[j] > pivotValue) {
            j--;
        }
        if (i < j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    arr[low] = arr[j];
    arr[j] = pivotValue;
    return j;
}
console.log(quickSort([55, 23, 26, 2, 18, 78, 23, 8, 2, 3]));
