// Input [[1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [11, 15]]
// Output [[1, 8], [10,15]]
function mergeInterval(arr) {
    if (arr == null || arr.length == 0)
        return [[]];
    var result = [];
    result.push([arr[0][0], arr[0][1]]);
    for (var i = 1; i < arr.length; i++) {
        var recentPair = result[result.length - 1];
        var currentStart = arr[i][0];
        var currentEnd = arr[i][1];
        var prevEnd = recentPair[1];
        console.log({ prevEnd: prevEnd, currentStart: currentStart, currentEnd: currentEnd });
        if (prevEnd >= currentStart) {
            recentPair[1] = Math.max(currentEnd, prevEnd);
        }
        else {
            result.push([currentStart, currentEnd]);
            console.log({ result: result });
        }
    }
    return result;
}
console.log(mergeInterval([[1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [11, 15]]));
