// Input arr = {1,2,3,4}
// Output arr = {24,12,8,6}
function findProduct(arr) {
    var length = arr.length;
    var temp = 1;
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = temp;
        temp *= arr[i];
    }
    console.log({ result: result });
    temp = 1;
    for (var i = length - 1; i >= 0; i--) {
        result[i] *= temp;
        temp *= arr[i];
    }
    return result;
}
console.log(findProduct([1, 2, 3, 4]));
