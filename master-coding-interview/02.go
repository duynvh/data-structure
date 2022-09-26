// maximum water container (MEDIUM)

package main

import "fmt"

func main() {
	heights := []int{1,8,6,2,5,4,8,3,7}
	fmt.Println(getMaxWaterContainer(heights))
}

func getMaxWaterContainer(heights []int) int {
	p1 := 0
	p2 := len(heights) - 1
	maxArea := 0

	for (p1 < p2) {
		height := min(heights[p1], heights[p2])
		width := p2 - p1
		area := height * width
		maxArea = max(maxArea, area)

		if (heights[p1] <= heights[p2]) {
			p1++
		} else {
			p2--
		}
	}

	return maxArea
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}