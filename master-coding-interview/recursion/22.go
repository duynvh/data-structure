// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

package main

import (
	"fmt"
	"strings"
)

func main() {
	arr := []string{"hello", "world", "abc"}
	fmt.Println(capitalizeWords(arr))
}

func capitalizeWords(arr []string) []string {
	if len(arr) == 1 {
		return []string{strings.Title(arr[0])}
	}

	result := capitalizeWords(arr[0 : len(arr)-1])
	result = append(result, strings.Title(arr[len(arr)-1:][0]))
	return result
}
