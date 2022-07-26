// Input: ['a', 'c', 'f', 'h'], key = 'f'
// Output: 'h'
// Explanation: The smallest letter greater than 'f' is 'h' in the given array.

// Input: ['a', 'c', 'f', 'h'], key = 'm'
// Output: 'a'
// Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.


// Input: ['a', 'c', 'f', 'h'], key = 'h'
// Output: 'a'
// Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.

function searchNextLetter(letters: string[], key: string): string {
    let length = letters.length;
    let start = 0;
    let end = letters.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + (end - start) / 2));
        if (key.localeCompare(letters[mid]) < 0) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return letters[start % length];
}

console.log(searchNextLetter(['a', 'c', 'f', 'h'], 'f'));
console.log(searchNextLetter(['a', 'c', 'f', 'h'], 'm'));
console.log(searchNextLetter(['a', 'c', 'f', 'h'], 'h'));