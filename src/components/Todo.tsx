export interface TodoItem {
	id: number
	content: string
}

interface TodoProps {
	items: TodoItem[]
}

const Todo = ({ items }: TodoProps) => {
	return (
		<div>
			{items.map((item) => (
				<p key={item.id}> {item.content} </p>
			))}
		</div>
	)
}

export default Todo
