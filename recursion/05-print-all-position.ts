function printAllPosition(arr: number[], length: number, find: number, index: number) {
    if (index === length) return;

    if (arr[index] == find) console.log(index);

    return printAllPosition(arr, length, find, index + 1);
}

printAllPosition([5,5,6,5,6,7], 6, 6, 0)