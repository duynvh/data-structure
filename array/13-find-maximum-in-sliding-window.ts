// Input: [-4, 2, -5, 1, -1, 6] Window Size: 3
// Output: [2, 2, 1, 6]

function maxSlidingWindow(arr: number[], windowSize: number): number[] {
    let result: number[] = [];
    let window: number[] = []; // store index
    
    if (arr.length > 0) {
        if (arr.length < windowSize) windowSize = arr.length;

        for (let i = 0; i < windowSize; i++) {
            // Removing last smallest element index
            while (window.length !== 0 && arr[i] >= arr[window.length - 1]) {
                window.pop();
            }

            // Adding newly picked element index
            window.push(i);
        }

        for (let i = windowSize; i < arr.length; ++i) {
            result.push(arr[window[0]]);

            // Removing all the elements indexes which are not in the current window
            while ((window.length !== 0) && window[0] <= i - windowSize) {
                window.shift();
            }

            // Removing the smaller elements indexes which are not required
            while ((window.length !== 0) && arr[i] >= arr[window[window.length - 1]]) {
                window.pop();
            }

            // Adding newly picked element index
            window.push(i);
        }

        // Adding the max number of the current window in the result
        result.push(arr[window[0]]);
    }
    
    return result;
}

console.log(maxSlidingWindow([-4, 2, -5, 1, -1, 6], 3));