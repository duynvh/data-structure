// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null

package main

import "fmt"

func main() {
	nums := []int{1,4,2,10,23,3,1,0,20}
	fmt.Println(maxSubarraySum(nums, 4))
}

func maxSubarraySum(arr []int, num int) int {
	if len(arr) == 0 {
		return 0
	}

	total := 0
	for i := 0; i < num; i++ {
		total += arr[i]
	}

	currentTotal := total
	for i := num; i < len(arr); i++ {
		currentTotal += arr[i] - arr[i - num]
		total = max(total, currentTotal)
	}

	return total
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}