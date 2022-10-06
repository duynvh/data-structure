package main

import (
	"fmt"
)

func main() {
	arr := []int{2, 6, 8, 2, 1, 8, 5, 6, 3}
	fmt.Println(maxSubarraySum(arr, 3))
}

func maxSubarraySum(arr []int, num int) int {
	if len(arr) < num {
		return 0
	}

	maxSum := 0
	tempSum := 0
	for i := 0; i < num; i++ {
		maxSum += arr[i]
	}

	tempSum = maxSum
	for i := num; i < len(arr); i++ {
		tempSum = tempSum - arr[i-num] + arr[i]
		maxSum = max(maxSum, tempSum)
	}

	return maxSum
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
