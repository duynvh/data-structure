// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

package main

import "fmt"

func main() {
	// str := "awesome"
	fmt.Println(reverse("awesome"))
	fmt.Println(reverse("rithmschool"))
}

func reverse(str string) string {
	if len(str) <= 1 {
		return str
	}

	return string(reverse(str[1:len(str)]) + string(str[0]))
}
