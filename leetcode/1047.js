// Input: s = "abbaca"
// Output: "ca"
// Input: s = "azxxzy"
// Output: "ay"
function removeDuplicates(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (stack.length === 0 || s[i] != stack[stack.length - 1]) {
            stack.push(s[i]);
        }
        else {
            stack.pop();
        }
    }
    if (stack.length === 0)
        return "";
    return stack.join("");
}
;
console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
