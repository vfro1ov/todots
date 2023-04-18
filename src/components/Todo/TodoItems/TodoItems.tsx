import { FunctionComponent } from 'react';
import { useAppDispatch } from '../../../hooks/useAppHooks';
import { removeTodo } from '../../../store/features/todoSlice';

interface TodoItemsProps {
  id: string,
  title: string,
}

const TodoItems: FunctionComponent<TodoItemsProps> = ({ id, title }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type='checkbox'
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItems;