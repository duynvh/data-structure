//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

package main

import "fmt"

func main() {
	fmt.Println(factorial(4))
	fmt.Println(factorial(7))
}

func factorial(x int) int {
	if x < 0 {
		return 0
	}

	if x == 1 {
		return 1
	}

	return x * factorial(x-1)
}
