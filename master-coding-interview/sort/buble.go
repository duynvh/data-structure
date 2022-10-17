package main

import "fmt"

// Start looping from with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j + 1], swap those two values.

func main() {
	arr := []int{37, 45, 29, 8, 12, 88, -3}
	fmt.Println(bubleSort(arr))
}

func bubleSort(arr []int) []int {
	noSwap := false
	for i := len(arr); i > 0; i-- {
		noSwap = true
		for j := 0; j < i-1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
				noSwap = false
			}
		}

		if noSwap {
			break
		}
	}

	return arr
}
