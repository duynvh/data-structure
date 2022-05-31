// Input [[1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [11, 15]]
// Output [[1, 8], [10,15]]

function mergeInterval(arr: number[][]): number[][] {
    if (arr == null || arr.length == 0) return [[]];
    
    let result: number[][] = [];

    result.push([arr[0][0], arr[0][1]]);

    for (let i = 1; i < arr.length; i++) {
        let recentPair = result[result.length - 1];
        let currentStart = arr[i][0];
        let currentEnd = arr[i][1];

        let prevEnd = recentPair[1];

        if (prevEnd >= currentStart) {
            recentPair[1] = Math.max(currentEnd, prevEnd);
        } else {
            result.push([currentStart, currentEnd]);
        }
    }
    return result;
}

console.log(mergeInterval([[1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [11, 15]]))