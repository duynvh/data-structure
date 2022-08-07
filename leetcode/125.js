// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
function isPalindrome(str) {
    var start = 0;
    var length = str.length;
    var end = length - 1;
    while (start <= end) {
        while (start < end && !isAlphaNumeric(str[start]))
            start++;
        while (start < end && !isAlphaNumeric(str[end]))
            end--;
        if (str[start].toUpperCase() !== str[end].toUpperCase())
            return false;
        start++;
        end--;
    }
    return true;
}
function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}
;
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
