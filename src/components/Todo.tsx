import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export interface TodoItem {
	id: string
	content: string
}

interface TodoProps {
	items: TodoItem[]
}

interface TodoInputProps {
	setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

const TodoInput = (props: TodoInputProps) => {
	const { setTodos } = props
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
		<input
			type='text'
			data-testid='input'
			onChange={handleChange}
			onKeyDown={handleKeyDown}
		/>
	)
}

const Todo = (props: TodoProps) => {
	const { items } = props
	const [todos, setTodos] = useState<TodoItem[]>(items)

	return (
		<div>
			<TodoInput setTodos={setTodos} />
			{todos.map((item) => (
				<p key={item.id}> {item.content} </p>
			))}
		</div>
	)
}

export default Todo
