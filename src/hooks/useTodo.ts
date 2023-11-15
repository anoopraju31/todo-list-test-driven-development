import { useState } from 'react'
import { TodoItem } from '../components/Todo'

const useTodo = (items: TodoItem[]) => {
	const [todos, setTodos] = useState<TodoItem[]>(items)

	const addTodoItem = (item: TodoItem) => {
		setTodos((prev) => [...prev, item])
	}

	const markAsDown = (item: TodoItem) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== item.id))
	}

	return { todos, addTodoItem, markAsDown }
}

export default useTodo
