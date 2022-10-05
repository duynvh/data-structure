// Input: [1,2,2,5,7,7,9]
// Output: 5

package main

import "fmt"

func main() {
	nums := []int{1,2,2,5,7,7,9}
	fmt.Println(countUniqueValues((nums)))
}

func countUniqueValues(nums []int) int {
	i := 0
	for j := 1; j < len(nums); j++ {
		if nums[i] != nums[j] {
			i++
			nums[i] = nums[j]
		}
	}

	return i + 1
}
