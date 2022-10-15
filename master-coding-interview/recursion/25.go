// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

package main

import (
	"fmt"
	"reflect"
)

func main() {
	obj := map[string]interface{}{
		"stuff": "foo",
		"b": map[string]interface{}{
			"b": 2,
			"bb": map[string]interface{}{
				"info": "info",
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

	fmt.Println(collectStrings(obj))
}

func collectStrings(obj map[string]interface{}) []string {
	var result []string
	for _, value := range obj {
		if typeof(value) == "string" {
			result = append(result, value.(string))
		} else if typeof(value) == "map[string]interface {}" {
			result = append(result, collectStrings(value.(map[string]interface{}))...)
		}
	}

	return result
}

func typeof(v interface{}) string {
	return reflect.TypeOf(v).String()
}
