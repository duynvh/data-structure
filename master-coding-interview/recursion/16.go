// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

package main

import "fmt"

func main() {
	fmt.Println(recursiveRange(10))
}

func recursiveRange(num int) int {
	if num == 0 {
		return 0
	}

	return num + recursiveRange(num-1)
}
