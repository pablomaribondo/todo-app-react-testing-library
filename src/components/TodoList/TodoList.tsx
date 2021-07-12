import { FC, Dispatch, SetStateAction } from 'react';

import { Todo } from '../../types';
import Footer from '../TodoFooter/TodoFooter';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoList: FC<TodoListProps> = ({ todos, setTodos }) => {
  const updateTaskHandler = (id: string) => {
    setTodos(prevState =>
      [...prevState].map(todo => {
        const updatedTodo = { ...todo };
        if (todo.id === id) updatedTodo.completed = !todo.completed;

        return updatedTodo;
      })
    );
  };

  const calculateNumberOfIncompletedTasks = () =>
    [...todos].reduce((accumulator, todo) => {
      if (!todo.completed) accumulator++;

      return accumulator;
    }, 0);

  return (
    <div className={styles['todolist-container']}>
      <div className={styles['todos-container']}>
        <div>
          {todos.map(todo => (
            <div
              key={todo.id}
              className={`${styles['todo-item']} ${
                todo.completed ? styles['todo-item-active'] : ''
              }`}
              onClick={() => updateTaskHandler(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer numberOfIncompleteTasks={calculateNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
};

export default TodoList;
