// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"

interface Pair {
    char: string;
    count: number;
}

function removeDuplicates2(s: string, k: number): string {
    let stack: Pair[] = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || s[i] != stack[stack.length - 1].char) {
            let pair = { char: s[i], count: 1 };
            stack.push(pair);
        } else {
            stack[stack.length - 1].count++;

            let count = stack[stack.length - 1].count;

            if (count === k) {
                stack.pop();
            }
        }
    }

    if (stack.length === 0) return "";
    let result: string[] = [];
    while (stack.length !== 0) {
        let count = stack[stack.length - 1].count;
        while (count--) {
            result.unshift(stack[stack.length - 1].char);
        }

        stack.pop();
    }
    return result.join("");
};

console.log(removeDuplicates2("abcd", 2));
console.log(removeDuplicates2("deeedbbcccbdaa", 3));
console.log(removeDuplicates2("pbbcggttciiippooaais", 2));