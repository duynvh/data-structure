// Input: n = 1
// Output: true

// Input: n = 16
// Output: true

// Input: n = 3
// Output: false

function isPowerOfTwo(n: number): boolean {
    if (n === 1) return true;
    if (n <= 0) return false;
    return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));