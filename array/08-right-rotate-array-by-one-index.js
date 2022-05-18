// Input: arr = [9, 6, 3, 4]
// Output: [4, 9, 6, 3]
//Rotates given Array by 1 position
function rotateArray(arr) {
    var lastElement = arr[arr.length - 1];
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
    return arr;
}
console.log(rotateArray([9, 6, 3, 4]));
