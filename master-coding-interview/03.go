// Input: 'aaz', 'zza'
// Output: false

// Input: 'rat', 'car'
// Output: false

// Input: 'anagram', 'nagaram'
// Output: true

package main

import "fmt"

func main() {
	fmt.Println(validAnagram("anagram", "nagaram"))
}

func validAnagram(str1, str2 string) bool {
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
