// Input: columnTitle = "A"
// Output: 1

// Input: columnTitle = "ZY"
// Output: 701

function titleToNumber(columnTitle: string): number {
    let ans: number = 0;
    let pow: number = 1;
    let size: number = columnTitle.length;
    
    for (let i = size - 1; i >= 0; i--) {
        ans = ans + ((columnTitle[i].charCodeAt(0) - 64) * pow);
        pow = pow * 26;
    }
    
    return ans;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("ZY"));