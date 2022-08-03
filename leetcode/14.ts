// 14. Longest Common Prefix

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs: string[]): string {
    let ans: string = "";
    if (strs.length === 0) return ans;
    let minIndexStr = Number.MAX_VALUE;;
    
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < minIndexStr) {
            minIndexStr = i; 
        }
    }
    
    let minStr = strs[minIndexStr];
    
    for (let i = 0; i < minStr.length; i++) {
        for (const str of strs) {
            if (str[i] !== minStr[i]) {
                return ans;
            }
        }
        
        ans += minStr[i];
    }
    
    return ans;
};