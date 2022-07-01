// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

function sortedArraySquares(arr: number[]): number[] {
    let length = arr.length;
    let squares = [];
    let highSquareIdx = length - 1;
    let left = 0;
    let right = highSquareIdx;

    while (left <= right) {
        let leftSquare = arr[left] * arr[left];
        let rightSquare = arr[right] * arr[right];

        if (leftSquare > rightSquare) {
            squares[highSquareIdx--] = leftSquare;
            left++;
        } else {
            squares[highSquareIdx--] = rightSquare;
            right--;
        }
    }

    return squares;
} 

console.log(sortedArraySquares([-2, -1, 0, 2, 3]))