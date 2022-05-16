// Input: arr = [9,2,3,2,6,6]
// Output: 9

function checkFirstUnique(arr: number[]): number {
    let frequency = {};
    for (const num of arr) {
        frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
    }

    for (const num of arr) {
        if (frequency[num] == 1) return num;
    }
    
    return -1;
}

console.log(checkFirstUnique([9,2,3,2,6,6]));