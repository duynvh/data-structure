// Input: [1,3,5]
// Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]

function permutation(arr: number[]): number[][] {
    const result: number[][] = [];
    const permutations: number[][] = [];
    permutations.push([]);
    for (const currentNumber of arr) {
        const size = permutations.length;
        for (let i = 0; i < size; i++) {
            const oldPermutations = permutations.shift();
            for (let j = 0; j <= oldPermutations.length; j++) {
                const newPermutation = [...oldPermutations];
                newPermutation.splice(j, 0, currentNumber);
                if (newPermutation.length == arr.length) {
                    result.push(newPermutation);
                } else {
                    permutations.push(newPermutation);
                }
            }
        }
    }

    return result;
}

console.log(permutation([1, 3, 5]));