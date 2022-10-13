// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

package main

import "fmt"

func isOdd(num int) bool {
	return num%2 != 0
}

func main() {
	arr := []int{4, 6, 8}
	fmt.Println(someRecursive(arr, isOdd))
}

func someRecursive(arr []int, callback func(int) bool) bool {
	if len(arr) == 0 {
		return false
	}

	if callback(arr[0]) {
		return true
	}

	return someRecursive(arr[1:], callback)
}
