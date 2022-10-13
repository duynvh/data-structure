// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

package main

import (
	"fmt"
	"reflect"
)

func main() {
	arr := []interface{}{[]interface{}{1, []interface{}{2, []interface{}{3, 4}, []interface{}{[]interface{}{5}}}}}
	fmt.Println(flatten(arr))
}

func flatten(arr []interface{}) []interface{} {
	var newArr []interface{}
	for i := 0; i < len(arr); i++ {
		if typeof(arr[i]) == "[]interface {}" {
			newArr = append(newArr, flatten(arr[i].([]interface{}))...)
		} else {
			newArr = append(newArr, arr[i])
		}
	}
	return newArr
}

func typeof(v interface{}) string {
	return reflect.TypeOf(v).String()
}
