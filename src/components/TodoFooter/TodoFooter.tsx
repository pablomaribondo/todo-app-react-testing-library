import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './TodoFooter.module.css';

interface TodoFooterProps {
  numberOfIncompleteTasks: number;
}
const TodoFooter: FC<TodoFooterProps> = ({ numberOfIncompleteTasks }) => {
  return (
    <div className={styles.footer}>
      <p>
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
};

export default TodoFooter;
