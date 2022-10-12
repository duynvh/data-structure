// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

package main

import "fmt"

func main() {
	arr := []int{1, 2, 3, 10}
	fmt.Println(productOfArray(arr))
}

func productOfArray(arr []int) int {
	if len(arr) == 0 {
		return 1
	}

	return arr[0] * productOfArray(arr[1:])
}
