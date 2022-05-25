// Input: [-4, 2, -5, 1, -1, 6] Window Size: 3
// Output: [2, 2, 1, 6]
function maxSlidingWindow(arr, windowSize) {
    var result = [];
    var window = [];
    if (arr.length > 0) {
        if (arr.length < windowSize)
            windowSize = arr.length;
        for (var i = 0; i < windowSize; i++) {
            while (window.length !== 0 && arr[i] >= arr[window.length - 1]) {
                window.pop();
            }
            window.push(i);
        }
        for (var i = windowSize; i < arr.length; ++i) {
            result.push(arr[window[0]]);
            while ((window.length !== 0) && window[0] <= i - windowSize) {
                window.shift();
            }
            while ((window.length !== 0) && arr[i] >= arr[window[window.length - 1]]) {
                window.pop();
            }
            window.push(i);
        }
        result.push(arr[window[0]]);
    }
    return result;
}
console.log(maxSlidingWindow([-4, 2, -5, 1, -1, 6], 3));
