import useTodo from '../hooks/useTodo'
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
	const { todos, addTodoItem, markAsDown } = useTodo(items)

	return (
		<div>
			<TodoInput onItemAdded={addTodoItem} />

			<ol>
				{todos.map((item) => (
					<Item key={item.id} item={item} markAsDown={markAsDown} />
				))}
			</ol>
		</div>
	)
}

export default Todo
