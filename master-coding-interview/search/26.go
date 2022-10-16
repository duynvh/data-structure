// naiveSearch("lorie loled", "lo"); // 2

package main

import "fmt"

func main() {
	fmt.Println(naiveSearch("lorie loled", "pop"))
}

func naiveSearch(long, short string) int {
	count := 0
	for i := 0; i < len(long); i++ {
		for j := 0; j < len(short); j++ {
			if short[j] != long[i+j] {
				break
			}

			if j == len(short)-1 {
				count++
			}
		}
	}

	return count
}
