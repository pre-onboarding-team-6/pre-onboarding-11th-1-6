import styled from 'styled-components';
import { SignOutButton, TodoInput, TodoItem, Flex } from '../components';
import { useTodos } from '../hooks';
import { ReactComponent as BallTriangle } from '../assets/icons/ball-triangle.svg';

const TodoList = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;
const FlexCenter = styled(Flex)`
  justify-content: center;
  height: 300px;
`;

const Todo = () => {
  const { todos, isLoading, create, update, remove } = useTodos();

  if (isLoading)
    return (
      <FlexCenter>
        <BallTriangle />
      </FlexCenter>
    );

  return (
    <>
      <Flex>
        <h1>할 일</h1>
        <SignOutButton />
      </Flex>
      <TodoInput create={create} />
      <TodoList>
        {todos.map(({ id, todo, isCompleted }) => (
          <TodoItem key={id} id={id} todo={todo} isCompleted={isCompleted} update={update} remove={remove} />
        ))}
      </TodoList>
    </>
  );
};

export default Todo;
