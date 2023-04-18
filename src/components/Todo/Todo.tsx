import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Todo.css';
import { useAppDispatch } from '../../hooks/useAppHooks';
import { addTodo } from '../../store/features/todoSlice';
import TodoList  from './TodoList/TodoList';

interface TodoProps {
	
}
const Todo = () => {
	const [text, setText] = useState('');
	const [showModal, setShowModal] = useState(false);
	const dispatch = useAppDispatch()

	const handleAddTodo = () => {
			if (text.trim().length) {
			dispatch(addTodo(text))
			setText('');
		}
	};

	return (
		<div>
			<h1>Todo List</h1>
			<button onClick={() => setShowModal(true)}>Add Todo</button>
			<div>
				<TodoList />
			</div>
			{showModal && <Modal onAddTodo={handleAddTodo} onClose={() => setShowModal(false)} />}
		</div>
	);
};

export default Todo;
