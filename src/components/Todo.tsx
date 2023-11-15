import { useState } from 'react'
import TodoInput from './TodoInput'
import Item from './Item'

export interface TodoItem {
	id: string
	content: string
}

interface TodoProps {
	items: TodoItem[]
}

const Todo = (props: TodoProps) => {
	const { items } = props
	const [todos, setTodos] = useState<TodoItem[]>(items)

	const onItemAdded = (item: TodoItem) => {
		setTodos((prev) => [...prev, item])
	}

	const markAsDown = (item: TodoItem) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== item.id))
	}

	return (
		<div>
			<TodoInput onItemAdded={onItemAdded} />
			{todos.map((item) => (
				<Item key={item.id} item={item} markAsDown={markAsDown} />
			))}
		</div>
	)
}

export default Todo
