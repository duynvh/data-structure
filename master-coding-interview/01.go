// Golang solution for Two Sum
package main

import "fmt"

func main() {
	nums := []int{5, 2, 4, 3, 1}
	target := 6
	fmt.Println(twoSum(nums, target))
}

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for idx, num := range nums {
		if v, found := m[target - num]; found {
			return []int{v, idx}
		}

		m[num] = idx
	}

	return nil
}