// Input: [1, 5, 3, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3] 

function findSubsetsWithDuplicate(arr: number[]): number[][] {
    arr.sort();
    const subsets: number[][] = [];
    let startIndex = 0, endIndex = 0;
    subsets.push([]);
    for (let i = 0; i < arr.length; i++) {
        startIndex = 0;
        if (i > 0 && arr[i] == arr[i - 1]) {
            startIndex = endIndex + 1;
        }
        const size = subsets.length;
        endIndex = size - 1;
        
        for (let j = startIndex; j <= endIndex; j++) {
            const set = [...subsets[j]];
            set.push(arr[i]);
            subsets.push(set);
        }
    }
    return subsets;
}

console.log(findSubsetsWithDuplicate([1, 5, 3, 3]));