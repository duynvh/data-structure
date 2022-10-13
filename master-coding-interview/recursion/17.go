// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

package main

import "fmt"

func main() {
	fmt.Println(fib(28))
}

func fib(n int) int {
	if n <= 2 {
		return 1
	}

	return fib(n-1) + fib(n-2)
}
