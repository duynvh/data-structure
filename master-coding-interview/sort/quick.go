package main

import "fmt"

func main() {
	arr := []int{37, 45, 29, 8, 4, 12, 88, -3}
	fmt.Println(quickSort(arr, 0, len(arr)-1))
}

func pivot(arr []int, start int, end int) int {
	pivot := arr[start]
	swapIdx := start

	for i := start + 1; i <= end; i++ {
		if pivot > arr[i] {
			swapIdx++
			arr[i], arr[swapIdx] = arr[swapIdx], arr[i]
		}
	}

	arr[start], arr[swapIdx] = arr[swapIdx], arr[start]
	return swapIdx
}

func quickSort(arr []int, left, right int) []int {
	if left < right {
		pivotIndex := pivot(arr, left, right)
		// left
		quickSort(arr, left, pivotIndex-1)

		// right
		quickSort(arr, pivotIndex+1, right)
	}

	return arr
}
