function storeAllPosition(arr: number[], length: number, find: number, index: number, output: number[]) {
    if (index === length) return;

    if (arr[index] == find) output.push(index);

    return storeAllPosition(arr, length, find, index + 1, output);
}

let output = [];
storeAllPosition([5,5,6,5,6,7], 6, 5, 0, output);

console.log(output);