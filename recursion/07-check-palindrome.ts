function checkPalindrome(arr: number[], start: number, end: number) {
    if (start > end) return true;

    if (arr[start] === arr[end]) {
        return checkPalindrome(arr, start + 1, end - 1);
    } else {
        return false;
    }
}

console.log(checkPalindrome([1, 2, 4, 3, 2, 1], 0, 5));