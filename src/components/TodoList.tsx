import Item from './Item'
import { TodoItem } from './Todo'

interface TodoListProps {
	todos: TodoItem[]
	markAsDown: (item: TodoItem) => void
}

const TodoList = (props: TodoListProps) => {
	const { todos, markAsDown } = props
	return (
		<ol>
			{todos.map((item) => (
				<Item key={item.id} item={item} markAsDown={markAsDown} />
			))}
		</ol>
	)
}

export default TodoList
