function firstIndex(arr: number[], length: number, find: number, index: number) {
    if (index === -1) return -1;

    if (arr[index] === find) return index;

    return firstIndex(arr, length, find, index - 1);
}

console.log(firstIndex([1, 10, 3, 4, 4], 5, 10, 4));