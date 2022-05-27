// Input
// [6, 7, 10, 25, 30, 63, 64]
// [0, 4, 5, 6, 7, 8, 50]
// [1, 6, 10, 14]
// Output: 6
function findLeastCommonNumber(arr1, arr2, arr3) {
    var i = 0, j = 0, k = 0;
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k])
            return arr1[i];
        if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
            i++;
        }
        else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
            j++;
        }
        else if (arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) {
            k++;
        }
    }
    return -1;
}
console.log(findLeastCommonNumber([6, 7, 10, 25, 30, 63, 64], [0, 4, 5, 6, 7, 8, 50], [1, 6, 10, 14]));
