// Input: [1, 10, 20, 0, 59, 63, 0, 88, 0]
// Output: [0, 0, 0, 1, 10, 20, 59, 63, 88]
function moveZeroToLeft(arr) {
    if (arr.length < 1)
        return;
    var length = arr.length;
    var writeIndex = arr.length - 1;
    var readIndex = arr.length - 1;
    while (readIndex >= 0) {
        if (arr[readIndex] != 0) {
            arr[writeIndex] = arr[readIndex];
            writeIndex--;
        }
        readIndex--;
    }
    while (writeIndex >= 0) {
        arr[writeIndex] = 0;
        writeIndex--;
    }
    return arr;
}
console.log(moveZeroToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0]));
