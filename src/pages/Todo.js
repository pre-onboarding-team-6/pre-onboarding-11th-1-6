import styled from 'styled-components';
import { SignOutButton, TodoInput, TodoItem } from '../components';
import { useTodos } from '../hooks';

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Todo = () => {
  const { todos, isLoading, error, create, update, remove } = useTodos();

  if (isLoading) return <div>...loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <TodoInput create={create} />
      <TodoList>
        {todos.map(({ id, todo, isCompleted }) => (
          <TodoItem key={id} id={id} todo={todo} isCompleted={isCompleted} update={update} remove={remove} />
        ))}
      </TodoList>
      <SignOutButton />
    </>
  );
};

export default Todo;
