import { FC, FormEvent, useState, Dispatch, SetStateAction } from 'react';
import { v4 } from 'uuid';

import { Todo } from '../../types';
import styles from './AddInput.module.css';

interface AddInputProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const AddInput: FC<AddInputProps> = ({ setTodos }) => {
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    setTodos(prevState => [
      ...prevState,
      {
        id: v4(),
        task: todo,
        completed: false
      }
    ]);
    setTodo('');
  };

  const changeHandler = (event: FormEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };

  return (
    <div className={styles['input-container']}>
      <input
        className={styles.input}
        value={todo}
        placeholder="Add a new task here..."
        onChange={changeHandler}
      />
      <button type="button" className={styles['add-btn']} onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddInput;
