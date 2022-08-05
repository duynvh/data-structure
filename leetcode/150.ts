// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    
    for (const token of tokens) {
        if (token == "+" || token == "/" || token == "-" || token == "*") {
            const number1 = stack.pop();
            const number2 = stack.pop();
            switch (token) {
                case "+":
                    stack.push(number2 + number1);
                    break;
                case "-":
                    stack.push(number2 - number1);
                    break;
                case "*":
                    stack.push(number2 * number1);
                    break;
                case "/":
                    const result = number2 / number1;
                    
                    if (result > 0) {
                        stack.push(Math.floor(result));
                    } else {
                        stack.push(Math.ceil(result));
                    }
                    break;
            }
        } else {
            stack.push(+token);
        }
    }
    
    return stack.pop();
};

console.log(evalRPN(["-78","-33","196","+","-19","-","115","+","-","-99","/","-18","8","*","-86","-","-","16","/","26","-14","-","-","47","-","101","-","163","*","143","-","0","-","171","+","120","*","-60","+","156","/","173","/","-24","11","+","21","/","*","44","*","180","70","-40","-","*","86","132","-84","+","*","-","38","/","/","21","28","/","+","83","/","-31","156","-","+","28","/","95","-","120","+","8","*","90","-","-94","*","-73","/","-62","/","93","*","196","-","-59","+","187","-","143","/","-79","-89","+","-"]));