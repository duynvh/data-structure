// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

package main

import (
	"fmt"
	"math"
)

func main() {
	nums := []int{1, 4, 16, 22, 5, 7, 8, 9, 10}
	fmt.Println(minSubArrayLen(nums, 55))
}

func minSubArrayLen(arr []int, num int) int {
	total := 0
	start := 0
	end := 0
	minLen := math.MaxInt32

	for start < len(arr) {
		// if current window doesn't add up to the given sum then
		// move the window to right
		if total < num && end < len(arr) {
			total += arr[end]
			end++
		} else if total >= num {
			// if current window add up to at least the sum given then
			// we can shrink the window
			minLen = min(minLen, end-start)
			total -= arr[start]
			start++
		} else {
			// current total less than required total but we reach the end, need this or else we'll be in an infinite loop
			break
		}
	}

	if minLen == math.MaxInt32 {
		return 0
	}

	return minLen
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
