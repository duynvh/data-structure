// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

function findSubsets(arr: number[]): number[][] {
    const subsets: number[][] = [];
    subsets.push([]);
    for (const currentNumber of arr) {
        const size = subsets.length;
        for (let i = 0; i < size; i++) {
            const set = [...subsets[i]];
            set.push(currentNumber);
            subsets.push(set);
        }
    }
    return subsets;
}

console.log(findSubsets([1, 5, 3]));