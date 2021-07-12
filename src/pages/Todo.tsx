import { FC } from 'react';
import { Container } from 'react-bootstrap';

import TodoComponent from '../components/Todo/Todo';

const Todo: FC = () => {
  return (
    <Container>
      <TodoComponent />
    </Container>
  );
};

export default Todo;
