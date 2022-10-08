// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// Multi pointer

package main

import (
	"fmt"
	"math"
)

func main() {
	arr := []int{1,3,3,5,6,7,10,12,19}
	fmt.Println(averagePair(arr, 8))
}

func averagePair(nums []int, avgNumber float32) bool {
	start := 0
	end := len(nums) - 1

	for start < end {
		avg := float32(math.Floor(float64(nums[start]+nums[end]) / 2))
		if avg == avgNumber {
			return true
		} else if avg < avgNumber {
			start++
		} else {
			end--
		}
	}
	return false
}
