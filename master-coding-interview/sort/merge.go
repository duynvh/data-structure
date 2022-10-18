package main

import (
	"fmt"
)

func main() {
	arr := []int{37, 45, 29, 8, 4, 12, 88, -3}
	fmt.Println(selectonSort(arr))
}

func merge(arr1, arr2 []int) []int {
	results := []int{}
	i := 0
	j := 0

	for i < len(arr1) && j < len(arr2) {
		if arr2[j] > arr1[i] {
			results = append(results, arr1[i])
			i++
		} else {
			results = append(results, arr2[j])
			j++
		}
	}

	for i < len(arr1) {
		results = append(results, arr1[i])
		i++
	}

	for j < len(arr2) {
		results = append(results, arr2[j])
		j++
	}

	return results
}

func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	mid := len(arr) / 2
	left := mergeSort(arr[0:mid])
	right := mergeSort(arr[mid:])
	return merge(left, right)
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
