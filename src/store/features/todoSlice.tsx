import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
	id: string;
	text: string;
};
type todoState = {
	todo: Todo[];
};

const initialState: todoState = {
	todo: [],
};

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state,action:PayloadAction<string>) => {
			state.todo.push({
				id: new Date().toISOString(),
				text:action.payload,}
			)
		},
		removeTodo: (state,action:PayloadAction<string>) => {
			state.todo = state.todo.filter(todo =>todo.id === action.payload)
		},
		
	},
	
});
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer;