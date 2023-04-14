import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Todo.css';

interface TodoItem {
	id: number;
	text: string;
}

const Todo = () => {
	const [todoList, setTodoList] = useState<TodoItem[]>([]);
	const [showModal, setShowModal] = useState(false);

	const handleAddTodo = (text: string) => {
		const newTodoList = [...todoList, { id: Date.now(), text }];
		setTodoList(newTodoList);
		setShowModal(false);
	};

	const handleDeleteTodo = (id: number) => {
		const newTodoList = todoList.filter((todo) => todo.id !== id);
		setTodoList(newTodoList);
	};

	return (
		<div>
			<h1>Todo List</h1>
			<button onClick={() => setShowModal(true)}>Add Todo</button>
			<ul>
				{todoList.map((todo) => (
					<li key={todo.id}>
						{todo.text}
						<button onClick={() => handleDeleteTodo(todo.id)}>X</button>
					</li>
				))}
			</ul>
			{showModal && <Modal onAddTodo={handleAddTodo} onClose={() => setShowModal(false)} />}
		</div>
	);
};

export default Todo;
