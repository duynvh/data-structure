// Input: arr = [1, 2, 3, 4, 5]
// Output: true

// Input: arr = [1, 2, 4, 3, 5]
// Output: false

function isSortedArray(arr: number[], length: number) {
    if (length === 0 || length === 1) return true;

    if (arr[0] > arr[1]) return false;

    const copyArr = [...arr];
    const firstElement = copyArr.shift();
    return isSortedArray(copyArr, length - 1);
}

console.log(isSortedArray([1, 2, 3, 4, 5], 5));
console.log(isSortedArray([1, 2, 4, 3, 5], 5));