// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

package main

import "fmt"

func main() {
	fmt.Println(findLongestSubstring("rithmschool"))
	fmt.Println(findLongestSubstring("longestsubstring"))
}

func findLongestSubstring(str string) int {
	longest := 0
	seen := make(map[rune]int)
	start := 0

	for i, value := range str {
		if seen[value] != 0 {
			start = max(start, seen[value])
		}

		longest = max(longest, i-start+1)
		seen[value] = i + 1
	}

	return longest
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
