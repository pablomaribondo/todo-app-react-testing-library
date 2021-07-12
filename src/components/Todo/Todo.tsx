import { FC, useState } from 'react';

import AddInput from '../AddInput/AddInput';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import { Todo as TodoData } from '../../types';
import styles from './Todo.module.css';

const Todo: FC = () => {
  const [todos, setTodos] = useState<TodoData[]>([]);

  return (
    <div className={styles.todo}>
      <Header title="Todo" />
      <AddInput setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
