// Input: n = 3
// Output: ["1","2","Fizz"]

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

function fizzBuzz(n: number): string[] {
    const strs: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            strs.push("FizzBuzz");
        } else if (i % 3 === 0) {
            strs.push("Fizz");
        } else if (i % 5 === 0) {
            strs.push("Buzz");
        } else {
            strs.push(i.toString());
        }
    }
    
    return strs;
};