// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println(sameFrequency(22, 222))
}

func sameFrequency(number1, number2 int) bool {
	str1 := strconv.FormatInt(int64(number1), 10)
	str2 := strconv.FormatInt(int64(number2), 10)

	if len(str1) != len(str2) {
		return false
	}

	lookup := make(map[rune]int)

	for _, value := range str1 {
		lookup[value] = lookup[value] + 1
	}

	for _, value := range str2 {
		if lookup[value] == 0 {
			return false
		} else {
			lookup[value] -= 1
		}
	}

	return true
}
