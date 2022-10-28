package main

import "fmt"

type Stack struct {
	data []interface{}
	top int
}

func (s *Stack) Push(ele interface{}) {
	s.top++
	s.data = append(s.data, ele)
}

func (s *Stack) Pop() interface{} {
	if len(s.data) > 0 {
		s.top--
		last := s.data[s.top]
		s.data = s.data[:s.top]
		return last
	}

	return nil
}

func (s *Stack) Peek() interface{} {
	if len(s.data) > 0 {
		return s.data[s.top - 1]
	}

	return nil
}

func (s *Stack) Clear() {
	s.top = 0
	s.data = []interface{}{}
}

func main() {
	var stack Stack
	stack.Push("this")
	stack.Push("is")
	stack.Push("spartar")

	for len(stack.data) > 0 {
		str := stack.Pop()
		fmt.Println(str)
	}
}