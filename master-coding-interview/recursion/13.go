// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

package main

import "fmt"

func main() {
	// fmt.Println(power(2, 0))
	fmt.Println(power(2, 4))
}

func power(base, exponent int) int {
	if exponent == 0 {
		return 1
	}
	return base * power(base, exponent-1)
}
