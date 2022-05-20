// Input: [1,2,3,4,5,6]
// Output: [6,1,5,2,4,3]

function maxMin(arr: number[]): number[] {
    let result: number[] = [];
    let pointerSmall: number = 0;
    let pointerLarge: number = arr.length - 1;

    let switchPointer: boolean = true;

    for (let i = 0; i < arr.length; i++) {
        if (switchPointer) {
            result[i] = arr[pointerLarge--];
        } else {
            result[i] = arr[pointerSmall++];
        }

        switchPointer = !switchPointer;
    }

    return result;
}

console.log(maxMin([1,2,3,4,5,6]));