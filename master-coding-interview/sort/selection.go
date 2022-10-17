package main

import "fmt"

// Store the first element as the smallest value you've seen so far
// Compare this item to the next item in the array until you find a smaller number
// If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
// If the minimum is not the value index you initially began with, swap the two values
// Repeat this with the next element until the array is sorted

func main() {
	arr := []int{37, 45, 29, 8, 12, 88, -3}
	fmt.Println(selectonSort(arr))
}

func selectonSort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		lowest := i
		for j := i + 1; j < len(arr); j++ {
			if arr[lowest] > arr[j] {
				lowest = j
			}
		}

		if i != lowest {
			arr[i], arr[lowest] = arr[lowest], arr[i]
		}
	}

	return arr
}
