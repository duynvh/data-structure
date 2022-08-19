function sumOfArray(arr: number[], length: number) {
    if (length <= 0) return 0;

    return sumOfArray(arr, length - 1) + arr[length - 1];
}

console.log(sumOfArray([1, 2, 3, 4, 5], 5));