import styled from 'styled-components';
import { Input, Button, Flex, InvisibleLabel } from '..';

const CreateButton = styled(Button)`
  width: 21%;
  border-radius: 15px;
`;

const InputBox = styled(Input)`
  width: 75%;
  margin: 0 8px 0 0;
`;

const TodoInput = ({ create }) => (
  <form onSubmit={create}>
    <Flex>
      <InvisibleLabel htmlFor="email">email input</InvisibleLabel>
      <InputBox id="todo-input" data-testid="new-todo-input" placeholder="Enter new todo!" />
      <CreateButton type="submit" data-testid="new-todo-add-button">
        + 추가
      </CreateButton>
    </Flex>
  </form>
);
export default TodoInput;
