import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { TodoItem } from './Todo'

interface TodoInputProps {
	onItemAdded: (item: TodoItem) => void
}

const TodoInput = (props: TodoInputProps) => {
	const { onItemAdded } = props
	const [todo, setTodo] = useState<string>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const id = uuid()
			onItemAdded({ id, content: todo })
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

export default TodoInput
