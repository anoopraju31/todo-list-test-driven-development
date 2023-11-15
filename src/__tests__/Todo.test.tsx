import { fireEvent, render, screen } from '@testing-library/react'
import Todo, { TodoItem } from '../components/Todo'

describe('ToDo List App', () => {
	//// 1. Render an item
	//// 2. Render Multiple items
	//// 3. Add new item to the list
	//// 4. Mark an item as Done

	it('Should render an item', () => {
		const todos: TodoItem[] = [
			{
				id: '1',
				content: 'Buy some milk',
			},
		]

		render(<Todo items={todos} />)

		expect(screen.getByText('Buy some milk')).toBeInTheDocument()
	})

	it('Should render another item', () => {
		const todos: TodoItem[] = [
			{
				id: '1',
				content: 'Buy some apple',
			},
		]

		render(<Todo items={todos} />)

		expect(screen.getByText('Buy some apple')).toBeInTheDocument()
	})

	it('Should render multiple items', () => {
		const todos: TodoItem[] = [
			{
				id: '1',
				content: 'Buy some apple',
			},
			{
				id: '2',
				content: 'Buy some milk',
			},
		]

		render(<Todo items={todos} />)

		expect(screen.getByText('Buy some apple')).toBeInTheDocument()
		expect(screen.getByText('Buy some milk')).toBeInTheDocument()
	})

	it('Should add a new item to the list', () => {
		render(<Todo items={[]} />)

		const input = screen.getByTestId('input')

		fireEvent.change(input, { target: { value: 'Buy some oranges' } })
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })

		expect(screen.getByText('Buy some oranges')).toBeInTheDocument()
	})

	it('Should mark an item as Done', () => {
		const todos: TodoItem[] = [
			{
				id: '1',
				content: 'Buy some milk',
			},
		]

		render(<Todo items={todos} />)

		const item = screen.getByText('Buy some milk')
		fireEvent.click(item)

		expect(screen.queryByText('Buy some milk')).not.toBeInTheDocument()
	})
})
