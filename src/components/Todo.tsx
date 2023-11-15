import { useState } from 'react'
import { v4 as uuid } from 'uuid'

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
	const [todo, setTodo] = useState<string>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const id = uuid()
			setTodos((prev) => [...prev, { id, content: todo }])
		}
	}

	return (
		<div>
			<input
				type='text'
				data-testid='input'
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			{todos.map((item) => (
				<p key={item.id}> {item.content} </p>
			))}
		</div>
	)
}

export default Todo
