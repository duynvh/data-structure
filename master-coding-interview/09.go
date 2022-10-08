// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

package main

import "fmt"

func main() {
	fmt.Println(isSubsequence("sing", "sting"))
}

func isSubsequence(str1, str2 string) bool {
	i := 0
	j := 0

	if len(str1) == 0 {
		return false
	}

	for j < len(str2) {
		if str2[j] == str1[i] {
			i++
		}

		if i == len(str1) {
			return true
		}

		j++
	}

	return false
}
