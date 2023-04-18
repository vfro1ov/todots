import { FunctionComponent } from 'react';
import { useAppSelector } from '../../../hooks/useAppHooks';
import  TodoItems  from '../TodoItems/TodoItems';

const TodoList: FunctionComponent<TodoListProps> = (props) => {
	const {} = props;
	const todos = useAppSelector((state) => state.todos.todo);
	return (
		<div>
			<ul>
				{todos.map((todo) => (
					<TodoItems title={''} key={todo.id} {...todo} />
				))}
			</ul>
		</div>
	);
};
export default TodoList;
export interface TodoListProps {}
