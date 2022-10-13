// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

package main

import "fmt"

func main() {
	// str := "awesome"
	fmt.Println(isPalindrome("awesome"))
	fmt.Println(isPalindrome("tacocat"))
}

func isPalindrome(str string) bool {
	if len(str) == 1 {
		return true
	}

	if len(str) == 2 {
		return str[0] == str[1]
	}

	if string(str[0]) == str[len(str)-1:] {
		return isPalindrome(str[1 : len(str)-1])
	}

	return false
	// return string(reverse(str[1:len(str)]) + string(str[0]))
}
