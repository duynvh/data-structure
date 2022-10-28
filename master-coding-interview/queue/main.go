package main

import "fmt"

type Queue struct {
	data []interface{}
}

func (q *Queue) Enqueue(ele interface{}) {
	q.data = append([]interface{}{ele}, q.data...)
	fmt.Println(q.data...)
}

func (q *Queue) Dequeue() interface{} {
	length := len(q.data)
	if length > 0 {
		front := q.data[length-1]
		q.data = q.data[:length-1]
		return front
	}

	return nil
}

func main() {
	var queue Queue
	queue.Enqueue("this")
	queue.Enqueue("is")
	queue.Enqueue("spartar")

	for len(queue.data) > 0 {
		str := queue.Dequeue()
		fmt.Println(str)
	}
}
