import { render, screen } from '@testing-library/react';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import TodoFooter from '../TodoFooter';

interface MockTodoFooterProps {
  numberOfIncompleteTasks: number;
}

const MockTodoFooter: FC<MockTodoFooterProps> = ({
  numberOfIncompleteTasks
}) => (
  <Router>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </Router>
);

it('should render the correct amount of incomplete tasks', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);

  const paragraphElement = screen.getByText(/5 tasks left/i);

  expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" when the amount of incomplete tasks is one', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  const paragraphElement = screen.getByText(/1 task left/i);

  expect(paragraphElement).toBeInTheDocument();
});
