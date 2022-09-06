package main

import "fmt"

var RADIX_LENGTH = 10

type Queue struct {
	data []interface{}
}

func (q *Queue) Enqueue(element interface{}) {
	q.data = append([]interface{}{element}, q.data...)
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

func (q *Queue) Front() interface{} {
	length := len(q.data)

	if length > 0 {
		return q.data[length-1]
	}

	return nil
}

func (q *Queue) Back() interface{} {
	length := len(q.data)

	if length > 0 {
		return q.data[0]
	}

	return nil
}

func (q *Queue) Length() int {
	return len(q.data)
}

func (q *Queue) Clear() {
	q.data = []interface{}{}
}

func (q *Queue) Print() {
	fmt.Printf("Queue %+v\n", q.data)
}

func PrintRadix(queues []Queue) {
	for i := 0; i < RADIX_LENGTH; i++ {
		fmt.Printf("Bin %d: %+v\n", i, queues[i].data)
	}
}

func Distribute(numbers []int, queues []Queue, digit int) {
	length := len(numbers)

	for i := 0; i < length; i++ {
		if digit == 1 {
			queues[numbers[i]%10].Enqueue(numbers[i])
		} else {
			queues[numbers[i]/10].Enqueue(numbers[i])
		}
	}
}

func Collect(numbers []int, queues []Queue) {
	i := 0
	for bin := 0; bin < RADIX_LENGTH; bin++ {
		for queues[bin].Length() != 0 {
			numbers[i] = queues[bin].Dequeue().(int)
			i++
		}
	}
}

func main() {
	numbers := []int{15, 82, 56, 17, 62, 45, 42, 90, 93, 33, 75, 21}

	queues := make([]Queue, RADIX_LENGTH)
	for i := 0; i < RADIX_LENGTH; i++ {
		queues[i] = Queue{}
	}

	fmt.Println("Before radix sort: ")
	fmt.Println(numbers)
	fmt.Println()

	Distribute(numbers, queues, 1)
	PrintRadix(queues)
	Collect(numbers, queues)
	fmt.Println()

	fmt.Println("After radix with digit 1: ")
	fmt.Println(numbers)
	fmt.Println()

	Distribute(numbers, queues, 10)
	PrintRadix(queues)
	Collect(numbers, queues)
	fmt.Println()

	fmt.Println("After radix sort: ")
	fmt.Println(numbers)
}
