package main

import (
	"fmt"
	"math"
)

// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Look from k = 0 up to this largest number of digits
// For each iteration of the loop
// + Create bucket for each digit (0-9)
// + Place each number in the corresponding bucket base on ít k digit
// Replace our existing array with values in our bucket, starting with 0 and going up to 9
// return list at the end

func main() {
	arr := []int{37, 45, 29, 8, 12, 88, -3}
	fmt.Println(radixSort(arr))
}

func getDigit(num, index int) int {
	return int(math.Abs(float64(num))/math.Pow(10, float64(index))) % 10
}

func digitCount(num int) int {
	if num == 0 {
		return 1
	}

	return int(math.Log10(math.Abs(float64(num)))) + 1
}

func mostDigits(nums []int) int {
	maxDigits := 0
	for i := 0; i < len(nums); i++ {
		maxDigits = max(maxDigits, digitCount(nums[i]))
	}

	return maxDigits
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func radixSort(nums []int) []int {
	maxDigitCount := mostDigits(nums)
	length := len(nums)
	for k := 0; k < maxDigitCount; k++ {
		digitBuckets := [10][]int{}
		for i := 0; i < length; i++ {
			digit := getDigit(nums[i], k)
			digitBuckets[digit] = append(digitBuckets[digit], nums[i])
		}

		nums = []int{}
		for i := 0; i < 10; i++ {
			if len(digitBuckets[i]) > 0 {
				nums = append(nums, digitBuckets[i]...)
			}
		}
	}
	return nums
}
