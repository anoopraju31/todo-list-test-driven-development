import { useState } from 'react'
import TodoInput from './TodoInput'

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

	return (
		<div>
			<TodoInput onItemAdded={onItemAdded} />
			{todos.map((item) => (
				<p key={item.id}> {item.content} </p>
			))}
		</div>
	)
}

export default Todo
