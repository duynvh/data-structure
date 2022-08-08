// Input: s = "aba"
// Output: true

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Input: s = "abc"
// Output: false

function check(s: string, start: number, end: number): boolean {
    while (start <= end) {
        if (s[start] !== s[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}

function validPalindrome(s: string): boolean {
    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
        if (s[start] != s[end]) {
            return check(s, start + 1, end) || check(s, start, end - 1)
        }

        start++;
        end--;
    }

    return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));