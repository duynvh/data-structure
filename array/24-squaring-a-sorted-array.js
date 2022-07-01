// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]
function sortedArraySquares(arr) {
    var length = arr.length;
    var squares = [];
    var highSquareIdx = length - 1;
    var left = 0;
    var right = highSquareIdx;
    while (left <= right) {
        var leftSquare = arr[left] * arr[left];
        var rightSquare = arr[right] * arr[right];
        if (leftSquare > rightSquare) {
            squares[highSquareIdx--] = leftSquare;
            left++;
        }
        else {
            squares[highSquareIdx--] = rightSquare;
            right--;
        }
    }
    return squares;
}
console.log(sortedArraySquares([-2, -1, 0, 2, 3]));
