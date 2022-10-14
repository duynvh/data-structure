// var obj1 = {
// 	outer: 2,
// 	obj: {
// 	  inner: 2,
// 	  otherObj: {
// 		superInner: 2,
// 		notANumber: true,
// 		alsoNotANumber: "yup"
// 	  }
// 	}
// }

// var obj2 = {
// a: 2,
// b: {b: 2, bb: {b: 3, bb: {b: 2}}},
// c: {c: {c: 2}, cc: 'ball', ccc: 5},
// d: 1,
// e: {e: {e: 2}, ee: 'car'}
// };

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

package main

import (
	"fmt"
	"reflect"
)

func main() {
	obj := map[string]interface{}{
		"a": 2,
		"b": map[string]interface{}{
			"b": 2,
			"bb": map[string]interface{}{
				"b": 2,
			},
		},
		"c": map[string]interface{}{
			"c": map[string]interface{}{
				"c": 2,
			},
			"cc":  "ball",
			"ccc": 5,
		},
		"d": 1,
		"e": map[string]interface{}{
			"e": map[string]interface{}{
				"e": 2,
			},
			"ee": "car",
		},
	}

	fmt.Println(nestedEvenSum(obj, 0))
}

func nestedEvenSum(obj map[string]interface{}, sum int) int {
	for _, value := range obj {
		if typeof(value) == "map[string]interface {}" {
			sum += nestedEvenSum(value.(map[string]interface{}), 0)
		} else if typeof(value) == "int" && value.(int)%2 == 0 {
			sum += value.(int)
		}
	}

	return sum
}

func typeof(v interface{}) string {
	return reflect.TypeOf(v).String()
}
