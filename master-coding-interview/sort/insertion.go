package main

import "fmt"

// 1. Start by picking the second element in the array
// 2. Now compare the second element with the one before it and swap if necessary
// 3 .Continue to the next element and if it is in the incorrect order
// iterate through the sorted portion to place the element in the correct place
// 4. Repeat until the array is sorted

func main() {
	arr := []int{37, 45, 29, 8, 12, 88, -3}
	fmt.Println(insertionSort(arr))
}

func insertionSort(arr []int) []int {
	var i, j int
	for i = 1; i < len(arr); i++ {
		currentVal := arr[i]
		j = i - 1
		for j >= 0 && arr[j] > currentVal {
			arr[j+1] = arr[j]
			j--
		}

		arr[j+1] = currentVal
	}

	return arr
}
