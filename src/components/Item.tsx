import { TodoItem } from './Todo'

interface ItemProps {
	item: TodoItem
	markAsDown: (item: TodoItem) => void
}

const Item = (props: ItemProps) => {
	const { item, markAsDown } = props

	return <li onClick={() => markAsDown(item)}> {item.content} </li>
}

export default Item
