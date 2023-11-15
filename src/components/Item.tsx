import { TodoItem } from './Todo'

interface ItemProps {
	item: TodoItem
	markAsDown: (item: TodoItem) => void
}

const Item = (props: ItemProps) => {
	const { item, markAsDown } = props

	return <p onClick={() => markAsDown(item)}> {item.content} </p>
}

export default Item
