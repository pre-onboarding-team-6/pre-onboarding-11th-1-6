import styled from 'styled-components';
import { SignOutButton, TodoInput, TodoItem, Flex } from '../components';
import { useTodos } from '../hooks';

const TodoList = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Todo = () => {
  const { todos, isLoading, error, create, update, remove } = useTodos();

  if (isLoading) return <div>...loading</div>;
  if (error)
    return (
      <div>
        {error}
        <p>{error.response.data.message}</p>
      </div>
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
