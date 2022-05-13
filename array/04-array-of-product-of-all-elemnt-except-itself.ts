// Input arr = {1,2,3,4}
// Output arr = {24,12,8,6}

function findProduct(arr: number[]): number[] {
    let length: number = arr.length;
    let temp: number = 1;
    let result: number[] = [];

    for (let i = 0; i < length; i++) {
        result[i] = temp;
        temp *= arr[i];
    }

    temp = 1;

    for (let i = length - 1; i >= 0; i--) {
        result[i] *= temp;
        temp *= arr[i];
    }

    return result;
}


console.log(findProduct([1,2,3,4]));