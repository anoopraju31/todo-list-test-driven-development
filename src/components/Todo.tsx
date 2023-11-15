import useTodo from '../hooks/useTodo'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export interface TodoItem {
	id: string
	content: string
}

interface TodoProps {
	items: TodoItem[]
}

const Todo = (props: TodoProps) => {
	const { items } = props
	const { todos, addTodoItem, markAsDown } = useTodo(items)

	return (
		<div>
			<TodoInput onItemAdded={addTodoItem} />
			<TodoList todos={todos} markAsDown={markAsDown} />
		</div>
	)
}

export default Todo
