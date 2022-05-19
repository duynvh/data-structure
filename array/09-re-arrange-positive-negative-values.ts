// Input: arr = [2, 4, -6, 8, -5, -10]
// Output: [-6, -5, -10, 8. 4, 2]

function reArrange(arr: number[]): number[] {
    let j: number = 0;
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i !== j) {
                let temp: number = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
    
    return arr;
}

console.log(reArrange([2, 4, -6, 8, -5, -10]));