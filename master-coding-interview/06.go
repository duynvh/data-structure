// Binary Search

package main

import (
	"fmt"
	"math"
)

func main() {
	arr := []int{1, 2, 3, 4, 5, 6}
	fmt.Println(binarySearch(arr, 6))
}

func binarySearch(arr []int, num int) int {
	min := 0
	max := len(arr) - 1

	for min <= max {
		middle := int32(math.Floor(float64(min+max) / 2))
		currentElement := arr[middle]

		if currentElement < num {
			min = int(middle) + 1
		} else if currentElement > num {
			max = int(middle) - 1
		} else {
			return int(middle)
		}
	}

	return -1
}
