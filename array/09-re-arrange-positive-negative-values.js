// Input: arr = [2, 4, -6, 8, -5, -10]
// Output: [-6, -5, -10, 8. 4, 2]
function reArrange(arr) {
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i !== j) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                console.log(arr);
            }
            j++;
        }
    }
    return arr;
}
console.log(reArrange([2, 4, -6, 8, -5, -10]));
